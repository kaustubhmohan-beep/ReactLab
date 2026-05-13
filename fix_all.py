"""Iteratively fix ALL remaining JS syntax errors until esprima passes."""
import re
import esprima

filepath = r'c:\Users\Geetish\OneDrive\Desktop\Chem_Project\js\data.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Step 1: The previous fix wrongly replaced delta- with " inside strings.
# Fix: replace "delta- (quote + delta-) patterns that were already inside strings
# These are cases where delta was a legitimate chemistry term, not an encoding artifact.
# Pattern: word,"unsaturated -> word,delta-unsaturated (inside strings)
content = content.replace('gamma,"unsaturated', 'gamma,delta-unsaturated')
content = content.replace('"nitroso compound', 'delta-nitroso compound')
content = content.replace('"nitroso Formation', 'delta-nitroso Formation')
content = content.replace('"oxime', 'delta-oxime')
content = content.replace('"carbon radical', 'delta-carbon radical')
content = content.replace('"C-H bond', 'delta-C-H bond')
content = content.replace('"position)', 'delta-position)')
content = content.replace('"carbon in steroid', 'delta-carbon in steroid')

# Step 2: Fix broken quote patterns from the encoding fix
# Pattern: NaHCO3" + NH4Cl  (quote in the middle of a string value)
# These are cases where a closing quote ended up mid-string
lines = content.split('\n')
fixes = 0

for i, line in enumerate(lines):
    original = line
    
    # Fix: label: "Low CN-, effect: " -> label: "Low CN-", effect: "
    # Missing closing quote on label value before comma
    m = re.search(r'label:\s*"([^"]*),\s*effect:', line)
    if m and not m.group(1).endswith('"'):
        # Check if the label value has a missing closing quote
        label_val = m.group(1)
        if '"' not in label_val:
            line = line.replace(f'label: "{label_val}, effect:', f'label: "{label_val}", effect:')
    
    # Fix: equation with quote in middle like: AgX" (gravimetric)
    # These need the inner quote escaped or removed
    if 'equation:' in line:
        # Find equation value and fix inner quotes
        eq_match = re.search(r'equation:\s*"(.*)",?\s*$', line.rstrip().rstrip(','))
        if eq_match:
            eq_val = eq_match.group(1)
            # Remove stray inner double quotes that aren't escaped
            if eq_val.count('"') > 0:
                fixed_val = eq_val.replace('"', "'")
                line = line.replace(eq_val, fixed_val)
    
    if line != original:
        fixes += 1
        print(f"Fixed L{i+1}: {line.strip()[:100]}")
    lines[i] = line

content = '\n'.join(lines)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nApplied {fixes} additional fixes.")

# Now validate iteratively
print("\nValidating...")
max_iterations = 30
for iteration in range(max_iterations):
    try:
        esprima.parseScript(content)
        print(f"SUCCESS! data.js is valid JavaScript after {iteration} additional manual fixes!")
        break
    except esprima.Error as e:
        msg = str(e)
        parts = msg.split(':')
        line_num = int(parts[0].replace('Line ', ''))
        lines = content.split('\n')
        bad_line = lines[line_num - 1]
        print(f"Error at L{line_num}: {msg}")
        print(f"  Content: {bad_line.strip()[:120]}")
        
        # Try common auto-fixes
        fixed = False
        
        # Fix: extra closing double quote before } or ,
        new_line = re.sub(r'""(\s*[},\]\)])', r'"\1', bad_line)
        if new_line != bad_line:
            lines[line_num - 1] = new_line
            content = '\n'.join(lines)
            print(f"  -> Removed extra quote")
            fixed = True
            
        # Fix: missing opening quote after effect: or label: or content:
        if not fixed:
            new_line = re.sub(r'(effect:\s*)([A-Z])', r'\1"\2', bad_line)
            new_line = re.sub(r'(label:\s*)([A-Z])', r'\1"\2', new_line)
            new_line = re.sub(r'(content:\s*)([A-Z])', r'\1"\2', new_line)
            if new_line != bad_line:
                lines[line_num - 1] = new_line
                content = '\n'.join(lines)
                print(f"  -> Added missing opening quote")
                fixed = True
        
        # Fix: delta- leftover (missing opening quote)
        if not fixed and 'delta-' in bad_line:
            new_line = bad_line.replace('delta-', '"')
            lines[line_num - 1] = new_line
            content = '\n'.join(lines)
            print(f"  -> Fixed delta- artifact")
            fixed = True
            
        # Fix: unescaped quote inside string (replace inner " with ')
        if not fixed:
            # Try to find the problematic inner quote
            stripped = bad_line.strip()
            # Count quotes - odd number means unbalanced
            quote_count = stripped.count('"')
            if quote_count % 2 != 0:
                # Find and remove the extra quote
                new_line = re.sub(r'""', '"', bad_line)
                if new_line != bad_line:
                    lines[line_num - 1] = new_line
                    content = '\n'.join(lines)
                    print(f"  -> Collapsed double quote")
                    fixed = True
        
        if not fixed:
            print(f"  -> MANUAL FIX NEEDED")
            # Save what we have so far
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            break
    
    # Save after each fix
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
