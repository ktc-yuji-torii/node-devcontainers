#!/bin/bash
containerWorkspaceFolder=$1

# Use quotes around the variable to handle spaces in the path
git config --global --add safe.directory "${containerWorkspaceFolder}"
git config pull.rebase false
git config --global commit.template .gitmessage
