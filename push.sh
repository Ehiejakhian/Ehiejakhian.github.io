#!/bin/bash

echo "========================="
echo "      Git Auto Push"
echo "========================="

branch=$(git branch --show-current)

git status

echo ""
read -p "Commit message: " message

if [ -z "$message" ]; then
    echo "Commit aborted: message cannot be empty."
    exit 1
fi

git add .

git commit -m "$message"

git push origin $branch

echo ""
echo "Pushed successfully to '$branch'"