import os
import time
import sys
import random

class PortfolioCore:
    def __init__(self, author):
        self.author = author
        self.languages = ["JavaScript", "CSS", "Python", "HTML"]
        self.status = "Active"

    def clear_screen(self):
        os.system('clear' if os.name == 'posix' else 'cls')

    def loading_animation(self, duration=3):
        print(f"[*] Initializing {self.author}'s Assets...")
        chars = "/—\|"
        for i in range(duration * 10):
            sys.stdout.write(f"\r[{chars[i % len(chars)]}] Loading modules... {i*10/duration:.0f}%")
            sys.stdout.flush()
            time.sleep(0.1)
        print("\n[+] System Ready!\n")

    def show_stats(self):
        print("-" * 40)
        print(f" AUTHOR  : {self.author}")
        print(f" STATUS  : {self.status}")
        print(f" ASSETS  : {', '.join(self.languages)}")
        print("-" * 40)

    def generate_random_id(self):
        return f"DEV-{random.randint(1000, 9999)}"

    def run(self):
        self.clear_screen()
        self.loading_animation()
        self.show_stats()
        
        print("\n[ Log Activity ]")
        activities = [
            "Optimizing CSS performance...",
            "Minifying JavaScript files...",
            "Updating Python core engine...",
            "Syncing with GitHub repository...",
            "Checking for syntax errors..."
        ]
        
        for activity in activities:
            delay = random.uniform(0.5, 1.5)
            time.sleep(delay)
            print(f"[{self.generate_random_id()}] {activity} OK!")

if __name__ == "__main__":
    try:
        app = PortfolioCore(author="Boiescylosh")
        app.run()
    except KeyboardInterrupt:
        print("\n\n[!] Process interrupted by user.")
        sys.exit()
