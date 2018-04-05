(function() {
  $(function() {
    var $event_dates;
    $event_dates = {
      addWeekday: function() {
        var originalDate = $(this).text();
        var phrase;

        if (originalDate.includes('-')) {
          // April 1 - 2, 2018
          // April 1 - May 1, 2018
          var dates = originalDate.split(',')[0];
          var year = originalDate.split(',')[1].trim();
          var startDate = dates.split('-')[0].trim();
          var endDate = dates.split('-')[1].trim();
          if (endDate.length < 3) {
            endDate = `${startDate.split(' ')[0]} ${endDate}`;
          }
          var startDay = moment(`${startDate}, ${year}`).format('dddd, MMMM Do');
          var endDay = moment(`${endDate}, ${year}`).format('dddd, MMMM Do, YYYY');
          phrase = `${startDay} - ${endDay}`;
        } else {
          // April 1, 2018
          phrase = moment(originalDate).format('dddd, MMMM Do, YYYY')
        }
        return $(this).text(phrase)
      },
      init: function() {
        return $("li.dates").each(this.addWeekday);
      }
    };
    return $event_dates.init();
  });

}).call(this);
