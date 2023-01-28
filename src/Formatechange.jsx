import React from 'react'

export function timeTo12HrFormat(time) {   // Take a time in 24 hour format and format it in 12 hour format
    var time_part_array = time.split(":");
    var ampm = 'AM';

    if (time_part_array[0] >= 12) {
      ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
      time_part_array[0] = time_part_array[0] - 12;
    }

    var formatted_time = time_part_array[0] + ':' + time_part_array[1] + ' ' + ampm;

    return formatted_time;
  }

  export function dateChange(date) {
    let date_part = date.split("-");
    let month = '';
    let newdate = '';
    if (date_part[1] === '01') month = 'January';
    if (date_part[1] === '02') month = 'Feburary';
    if (date_part[1] === '03') month = 'March';
    if (date_part[1] === '04') month = 'April';
    if (date_part[1] === '05') month = 'May';
    if (date_part[1] === '06') month = 'June';
    if (date_part[1] === '07') month = 'July';
    if (date_part[1] === '08') month = 'August';
    if (date_part[1] === '09') month = 'September';
    if (date_part[1] === '10') month = 'October';
    if (date_part[1] === '11') month = 'November';
    if (date_part[1] === '12') month = ' December';
    return newdate = month + ',' + ' ' + date_part[2] + ' ' + date_part[0];
  }
