/*This calculates the sum of the progress*/ 

SELECT SUM(progress_for_the_day) FROM prog_date_time_progress 
WHERE user_id = $1
-- /* Calculate the percentage of progress toward total goal*/

-- /* Calculate the number of days within the period */


/* Calculate the number of non-progress days */

/* Calculate the minimum integer for randomization range */

/* Calculate the maximum integer for randomization range */

/* Return the random integer within the calculated range */

/* Return the rounded decimal if the goal number is smaller than 100 */

/* Calculate and return the time between now and the next date/time to text */

/* Compare progress_for_the_day to random_challenge_for_the_day */
