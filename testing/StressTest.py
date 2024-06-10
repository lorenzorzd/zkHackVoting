import subprocess

rust_executable = "/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/testing/mount/target/release/mount"  # Replace with the actual path to your Rust executable


def Proof():
    "Proof"

def ExecuteContract():
    "Contract"

def MountVM():    
    print("Vm Mount Success")



try:
    result = subprocess.run([rust_executable], capture_output=True, text=True, check=True)
    output = result.stdout
    print("Rust Program Output:")
    print(output)
except subprocess.CalledProcessError as e:
    print("Rust Program Execution Failed. Error:", e)
