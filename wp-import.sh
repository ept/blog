#!/bin/sh

#post_date
#post_name (slug)
#post_title
#post_content


# echo "select ID from ync_en_posts where post_status='publish' and post_author=1;" | mysql wordpress
POST_IDS="3 11 14 16 17 18 19 40 42 43 44 47 48 52 54 55 57 58 59 62 63 64 65 66 68 70 72 75 76 78 82 83 84 85 89 90 91 92 104 110 114 119 121 128 150 154 161 166 175 184 189 192 195 211 217 227 232 237 251 262 269 278 293 296 302 309 315 318 324 331 338 344 352 356 368 372 376 378 394"

for POST_ID in $POST_IDS; do
  DATE=`echo "select post_date from ync_en_posts where ID = $POST_ID" | mysql wordpress | tail -n 1 | sed -e 's/ .*//'`
  NAME=`echo "select post_name from ync_en_posts where ID = $POST_ID" | mysql wordpress | tail -n 1`
  FILE="_posts/$DATE-$NAME.md"
  echo "$FILE"
  echo "---" > "$FILE"
  echo "layout: ync-post" >> "$FILE"
  echo -n "title: \"" >> "$FILE"
  echo "select post_title from ync_en_posts where ID = $POST_ID" | mysql wordpress | tail -n 1 | sed -e 's/$/"/' >> "$FILE"
  echo "---" >> "$FILE"
  echo "" >> "$FILE"
  echo "select post_content from ync_en_posts where ID = $POST_ID" | mysql wordpress | tail -n +2 | ruby format-post.rb >> "$FILE"
done
