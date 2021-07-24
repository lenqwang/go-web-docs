filenames=(01.0 01.1 01.2 01.3 01.4 01.5 02.0 02.1 02.2 02.3 02.4 02.5 02.6 02.7 02.8 03.0 03.1 03.2 03.3 03.4 03.5 04.0 04.1 04.2 04.3 04.4 04.5 04.6 05.0 05.1 05.2 05.3 05.4 05.5 05.6 05.7 06.0 06.1 06.2 06.3 06.4 06.5 07.0 07.1 07.2 07.3 07.4 07.5 07.6 07.7 08.0 08.1 08.2 08.3 08.4 08.5 09.0 09.1 09.2 09.3 09.4 09.5 09.6 09.7 10.0 10.1 10.2 10.3 10.4 11.0 11.1 11.2 11.3 11.4 12.0 12.1 12.2 12.3 12.4 12.5 13.0 13.1 13.2 13.3 13.4 13.5 13.6 14.0 14.1 14.2 14.3 14.4 14.5 14.6 14.7 README SUMMARY preface ref)

pull() {
  for i in "${!filenames[@]}"
  do
    filename="${filenames[$i]}"
    url="https://raw.githubusercontent.com/astaxie/build-web-application-with-golang/master/zh/$filename.md"
    echo $url
    curl -L $url > backups/$filename.md
  done
}

pull