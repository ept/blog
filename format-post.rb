output_lines = []


while line = gets
  line.gsub! /\r/, ""
  line.gsub! /\\n/, "\n"
  line.gsub! /\\t/, ""
  line.gsub! %r{http://www\.yes-no-cancel\.co\.uk(/\w)}, "\\1"
  line.gsub! %r{/wp-content/uploads/}, "/static/"
  line.gsub! /\[/, "\\["
  line.gsub! /\]/, "\\]"
  line.gsub! /<em>([^<]+)<\/em>/, "*\\1*"
  line.gsub! /<i>([^<]+)<\/i>/, "*\\1*"
  line.gsub! /<strong>([^<]+)<\/strong>/, "**\\1**"
  line.gsub! /<b>([^<]+)<\/b>/, "**\\1**"
  line.gsub! /<a href="([^"]+)">([^<]+)<\/a>/, "[\\2](\\1)"

  output_line = ""
  line.split(/ /).each do |word|
    if output_line.length + word.length >= 100 || word =~ /<\w|^\[/
      output_lines += output_line.split(/\n/)
      output_line = word.dup
    else
      output_line << ' ' unless output_line.empty?
      output_line << word
    end
  end
  output_lines += output_line.split(/\n/)
end

output_lines << ''

starting_paragraph = true
paragraph_contains_html = false
first_line = nil

output_lines.each_with_index do |line, index|
  line.strip!
  if line.empty?
    starting_paragraph = true
    if paragraph_contains_html
      unless output_lines[index - 1] =~ />$/
        output_lines[first_line] = "<p>#{output_lines[first_line]}"
        output_lines[index - 1] << "</p>"
      end
      paragraph_contains_html = false
    end
  else
    first_line = index if starting_paragraph
    paragraph_contains_html = true if line =~ /</
    starting_paragraph = false
  end
end

puts output_lines.join("\n")
