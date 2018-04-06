# NYC Tech Conferences

A simple list of [NYC tech conferences][n]. Site is based on [RubyConferences.org][r].

[n]: http://nyctechconferences.org
[r]: http://rubyconferences.org/

## Contributing

The list of events is driven by the two files in the `_data` directory - if you
have an update for those things, just change the YAML and send a PR.

Here is a list of the keys that can be used:

* `name`: The official name of the event
* `location`: This would be "City, State"
* `dates`: The dates for the event - use "Month Day, Year" format with multi-day
  events looking like "1 - 2".
* `url`: The url for the event.
* `twitter`: The twitter handle ("@") or hashtag ("#") for the event.

Extra keys for the current list:

* `reg_phrase`: Typically you want to put "Registration open" here.
* `reg_date`: If there is a registration deadline, enter that here.
* `cfp_phrase`: Typically you want to put "CFP open" here.
* `cfp_date`: If there is a cfp deadline, enter that here.

Extra keys for the past list:

* `video_link`: A url to the videos for the event.

## Getting started

We build the site with [Jekyll](https://jekyllrb.com/).

Install Ruby, then:
```
cd ruby-conferences.github.io
bundle install
bundle exec jekyll serve
```
and point your browser at http://localhost:4000/

## License

All original work uses the Creative Commons
[Attribution-NonCommercial-ShareAlike 4.0 International License][l].

[l]: http://creativecommons.org/licenses/by-nc-sa/4.0/deed.en_US.
