#!/bin/bash
# cd into book directory, e.g. .../Starlit-Strasbourg/public/docs/REDWATER then ../build_index.sh
shopt -s nullglob
printf "{" > Table_Of_Contents.json

categorydelim=""
for dir in ./*/; do
  
  if [[ $dir == _* ]]; then
    continue
  fi

  printf "$categorydelim\n" >> Table_Of_Contents.json
  printf "  \"$(echo $dir | cut -d'/' -f 2)\": [" >> Table_Of_Contents.json

  pagedelim=""
  for file in $dir/*; do
    if [[ -f $file && $file != _* ]]; then
      printf "%s%s" "$pagedelim" "\"${file##*/}\"" >> Table_Of_Contents.json
      pagedelim=","
    fi
  done

  categorydelim=","
  printf "]" >> Table_Of_Contents.json
done
printf "\n}" >> Table_Of_Contents.json
