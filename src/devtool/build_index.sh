#!/bin/bash

: '
wikis/book               = clickable object in threejs
wikis/book/category      = tabs on the overlay when you click on the book
wikis/book/category/file = entry in each tab (md)

File Naming Convention := code_TITLE.md 

e.g Category === CHARACTER

    Written First:  0_JimmyDescription.md
    Written Second: 1_JimmyArt.md
    Written Later:  01_JimmyDescriptionAddon.md

    --> Table of Contents built as:
    "CHARACTER": [0_JimmyDescription.md, 01_JimmyDescriptionAddon.md, 1_JimmyArt.md]

    --> Javascript processes as
    <div>
        1_JimmyArt.md                 <-- top (recent)
        01_JimmyDescriptionAddon.md
        0_JimmyDescription.md         <-- bottom (old)
    </div>

i.e lower code == bottom of screen

** DO NOT FORGET TO RUN `/src/devtool/build_index /path/to/wikis/book` AFTER EACH CHANGE OR NOTHING WILL SHOW UP
'

shopt -s nullglob
printf "{" > $1/Table_Of_Contents.json

categorydelim=""
for dir in $1/*/; do
  printf "$categorydelim\n" >> $1/Table_Of_Contents.json
  printf "  \"$(echo $dir | awk -F/ '{print $(NF-1)}')\": [" >> $1/Table_Of_Contents.json

  pagedelim=""
  for file in $dir/*; do
    if [[ -f $file ]]; then
      printf "%s%s" "$pagedelim" "\"${file##*/}\"" >> $1/Table_Of_Contents.json
      pagedelim=","
    fi
  done

  categorydelim=","
  printf "]" >> $1/Table_Of_Contents.json
done
printf "\n}" >> $1/Table_Of_Contents.json
