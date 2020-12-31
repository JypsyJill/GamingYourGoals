SELECT beg_date, end_date,
    SUM(case when extract (dow from dt) in (1,2,3,4,5,6) then 1 else 0 end) as thediff
FROM (
    SELECT beg_date, end_date,
        generate_series(beg_date, end_date, '1 day'::interval) as dt
    FROM goal WHERE user_id= $1
    ) t
    group by beg_date, end_date;