export type Data = Readonly<{
  example: string
  custom: string
}>

export const day05: Data = {
  example: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
  custom: `    [P]                 [Q]     [T]
[F] [N]             [P] [L]     [M]
[H] [T] [H]         [M] [H]     [Z]
[M] [C] [P]     [Q] [R] [C]     [J]
[T] [J] [M] [F] [L] [G] [R]     [Q]
[V] [G] [D] [V] [G] [D] [N] [W] [L]
[L] [Q] [S] [B] [H] [B] [M] [L] [D]
[D] [H] [R] [L] [N] [W] [G] [C] [R]
 1   2   3   4   5   6   7   8   9 

move 1 from 7 to 6
move 1 from 8 to 5
move 3 from 7 to 4
move 5 from 9 to 6
move 3 from 7 to 9
move 2 from 5 to 7
move 10 from 6 to 8
move 2 from 2 to 3
move 2 from 9 to 1
move 6 from 8 to 2
move 5 from 3 to 8
move 4 from 5 to 9
move 3 from 4 to 5
move 2 from 1 to 8
move 3 from 1 to 7
move 1 from 7 to 1
move 4 from 7 to 8
move 1 from 5 to 6
move 1 from 9 to 3
move 8 from 2 to 4
move 1 from 5 to 8
move 1 from 5 to 3
move 2 from 1 to 8
move 4 from 3 to 4
move 1 from 3 to 4
move 1 from 1 to 7
move 1 from 7 to 8
move 1 from 7 to 4
move 5 from 9 to 1
move 2 from 6 to 7
move 3 from 2 to 1
move 12 from 8 to 7
move 8 from 7 to 3
move 1 from 2 to 8
move 6 from 7 to 1
move 1 from 6 to 3
move 8 from 4 to 3
move 5 from 3 to 6
move 6 from 1 to 8
move 2 from 1 to 2
move 2 from 3 to 1
move 4 from 4 to 5
move 1 from 5 to 7
move 1 from 6 to 9
move 1 from 4 to 9
move 8 from 1 to 4
move 10 from 3 to 5
move 2 from 4 to 5
move 2 from 2 to 6
move 2 from 1 to 6
move 11 from 4 to 7
move 9 from 6 to 5
move 16 from 8 to 3
move 15 from 5 to 6
move 10 from 3 to 6
move 24 from 6 to 5
move 5 from 7 to 5
move 1 from 6 to 3
move 1 from 7 to 2
move 2 from 7 to 6
move 3 from 3 to 6
move 8 from 5 to 1
move 3 from 9 to 8
move 3 from 8 to 4
move 1 from 7 to 1
move 1 from 2 to 9
move 1 from 9 to 2
move 2 from 3 to 1
move 2 from 4 to 2
move 5 from 6 to 8
move 3 from 7 to 1
move 1 from 4 to 2
move 26 from 5 to 9
move 1 from 3 to 6
move 7 from 1 to 9
move 1 from 3 to 5
move 1 from 6 to 5
move 1 from 5 to 4
move 5 from 5 to 6
move 1 from 4 to 9
move 3 from 9 to 3
move 4 from 8 to 5
move 2 from 5 to 2
move 1 from 1 to 6
move 1 from 8 to 9
move 2 from 2 to 4
move 2 from 3 to 7
move 1 from 7 to 6
move 7 from 6 to 7
move 1 from 4 to 3
move 2 from 2 to 4
move 28 from 9 to 3
move 26 from 3 to 7
move 2 from 4 to 3
move 2 from 9 to 1
move 4 from 3 to 6
move 1 from 4 to 5
move 1 from 3 to 4
move 3 from 1 to 9
move 1 from 4 to 7
move 1 from 5 to 7
move 1 from 6 to 9
move 23 from 7 to 1
move 4 from 9 to 5
move 3 from 9 to 4
move 2 from 6 to 3
move 1 from 6 to 7
move 3 from 3 to 9
move 11 from 7 to 2
move 4 from 2 to 3
move 23 from 1 to 2
move 15 from 2 to 4
move 2 from 7 to 9
move 13 from 2 to 8
move 1 from 7 to 5
move 1 from 2 to 8
move 7 from 4 to 8
move 6 from 4 to 3
move 1 from 2 to 4
move 1 from 2 to 9
move 20 from 8 to 5
move 1 from 8 to 4
move 3 from 4 to 7
move 3 from 3 to 9
move 1 from 2 to 8
move 20 from 5 to 3
move 6 from 5 to 3
move 26 from 3 to 9
move 2 from 7 to 5
move 1 from 5 to 4
move 1 from 7 to 8
move 2 from 8 to 5
move 12 from 9 to 4
move 2 from 3 to 2
move 4 from 1 to 9
move 2 from 3 to 1
move 4 from 5 to 6
move 5 from 9 to 4
move 2 from 6 to 3
move 2 from 6 to 8
move 2 from 8 to 3
move 1 from 2 to 7
move 21 from 4 to 2
move 1 from 4 to 5
move 13 from 2 to 4
move 4 from 3 to 9
move 25 from 9 to 7
move 7 from 2 to 4
move 18 from 7 to 8
move 2 from 1 to 5
move 1 from 3 to 9
move 2 from 9 to 3
move 1 from 1 to 6
move 8 from 7 to 6
move 4 from 3 to 2
move 1 from 4 to 7
move 6 from 2 to 5
move 1 from 7 to 3
move 5 from 6 to 8
move 4 from 4 to 1
move 9 from 5 to 1
move 12 from 4 to 3
move 1 from 6 to 5
move 1 from 5 to 2
move 13 from 3 to 8
move 14 from 8 to 6
move 2 from 1 to 6
move 1 from 2 to 5
move 11 from 1 to 3
move 1 from 5 to 3
move 6 from 6 to 8
move 23 from 8 to 5
move 1 from 8 to 1
move 18 from 5 to 8
move 5 from 6 to 8
move 10 from 3 to 8
move 1 from 1 to 5
move 2 from 4 to 8
move 1 from 4 to 7
move 5 from 5 to 3
move 1 from 6 to 1
move 6 from 3 to 9
move 35 from 8 to 4
move 1 from 7 to 6
move 2 from 9 to 8
move 1 from 1 to 6
move 17 from 4 to 7
move 1 from 5 to 1
move 4 from 9 to 6
move 12 from 6 to 4
move 29 from 4 to 2
move 17 from 7 to 8
move 27 from 2 to 7
move 2 from 2 to 1
move 1 from 3 to 1
move 25 from 7 to 4
move 25 from 4 to 6
move 1 from 4 to 2
move 4 from 1 to 6
move 1 from 2 to 6
move 25 from 6 to 1
move 5 from 6 to 8
move 15 from 1 to 6
move 2 from 7 to 8
move 15 from 6 to 2
move 14 from 2 to 8
move 1 from 2 to 3
move 4 from 1 to 4
move 4 from 4 to 2
move 6 from 1 to 8
move 3 from 2 to 5
move 3 from 5 to 7
move 1 from 2 to 3
move 1 from 6 to 8
move 8 from 8 to 5
move 2 from 7 to 4
move 1 from 7 to 9
move 3 from 5 to 8
move 2 from 4 to 6
move 3 from 5 to 8
move 2 from 3 to 4
move 2 from 6 to 5
move 1 from 9 to 8
move 48 from 8 to 5
move 1 from 8 to 9
move 41 from 5 to 4
move 4 from 5 to 2
move 3 from 2 to 7
move 1 from 2 to 7
move 1 from 8 to 1
move 1 from 9 to 4
move 1 from 1 to 3
move 7 from 4 to 7
move 11 from 7 to 4
move 4 from 4 to 1
move 37 from 4 to 9
move 4 from 4 to 3
move 32 from 9 to 3
move 5 from 9 to 1
move 12 from 3 to 2
move 3 from 4 to 1
move 3 from 1 to 6
move 3 from 1 to 6
move 2 from 1 to 5
move 9 from 2 to 7
move 3 from 7 to 3
move 6 from 6 to 5
move 4 from 3 to 6
move 3 from 6 to 9
move 13 from 3 to 8
move 3 from 1 to 9
move 2 from 3 to 2
move 2 from 7 to 8
move 1 from 6 to 8
move 4 from 2 to 8
move 2 from 8 to 3
move 1 from 2 to 1
move 4 from 7 to 3
move 6 from 3 to 5
move 3 from 9 to 8
move 13 from 8 to 6
move 1 from 9 to 2
move 2 from 3 to 8
move 1 from 1 to 9
move 1 from 1 to 3
move 10 from 6 to 3
move 1 from 2 to 5
move 22 from 5 to 7
move 1 from 9 to 3
move 1 from 8 to 7
move 2 from 7 to 8
move 6 from 8 to 4
move 2 from 9 to 2
move 21 from 7 to 6
move 4 from 8 to 5
move 1 from 8 to 4
move 1 from 5 to 7
move 12 from 3 to 6
move 1 from 2 to 6
move 1 from 7 to 9
move 1 from 2 to 6
move 6 from 3 to 5
move 6 from 4 to 2
move 1 from 3 to 6
move 1 from 9 to 7
move 6 from 2 to 7
move 22 from 6 to 4
move 3 from 6 to 5
move 7 from 5 to 7
move 3 from 7 to 8
move 2 from 5 to 3
move 2 from 3 to 7
move 13 from 6 to 8
move 3 from 7 to 1
move 3 from 5 to 9
move 16 from 4 to 5
move 1 from 5 to 8
move 2 from 1 to 6
move 1 from 1 to 7
move 6 from 4 to 2
move 4 from 8 to 7
move 13 from 5 to 7
move 1 from 6 to 3
move 2 from 5 to 6
move 10 from 7 to 6
move 1 from 3 to 9
move 1 from 4 to 3
move 1 from 3 to 5
move 12 from 7 to 3
move 2 from 2 to 1
move 1 from 5 to 9
move 2 from 9 to 6
move 4 from 2 to 7
move 7 from 7 to 9
move 1 from 7 to 8
move 1 from 1 to 9
move 11 from 9 to 7
move 4 from 8 to 3
move 5 from 3 to 5
move 2 from 8 to 4
move 3 from 5 to 2
move 2 from 2 to 8
move 1 from 5 to 2
move 5 from 8 to 2
move 7 from 7 to 2
move 4 from 8 to 9
move 2 from 7 to 6
move 4 from 9 to 7
move 6 from 2 to 4
move 1 from 5 to 6
move 5 from 3 to 5
move 1 from 8 to 1
move 10 from 6 to 3
move 8 from 2 to 8
move 1 from 8 to 1
move 5 from 3 to 2
move 2 from 8 to 7
move 6 from 7 to 4
move 12 from 4 to 1
move 4 from 1 to 2
move 1 from 2 to 1
move 8 from 2 to 9
move 2 from 4 to 8
move 5 from 9 to 7
move 8 from 3 to 8
move 2 from 3 to 1
move 6 from 8 to 2
move 7 from 7 to 2
move 1 from 3 to 5
move 2 from 7 to 2
move 1 from 9 to 1
move 1 from 9 to 7
move 1 from 9 to 4
move 1 from 6 to 7
move 1 from 2 to 3
move 1 from 3 to 8
move 1 from 4 to 9
move 5 from 6 to 1
move 7 from 8 to 2
move 1 from 7 to 4
move 9 from 2 to 8
move 7 from 2 to 7
move 1 from 4 to 2
move 8 from 7 to 5
move 4 from 8 to 7
move 8 from 8 to 6
move 9 from 1 to 4
move 1 from 9 to 1
move 4 from 7 to 6
move 7 from 1 to 7
move 6 from 7 to 3
move 4 from 1 to 8
move 13 from 6 to 3
move 6 from 2 to 3
move 1 from 3 to 4
move 2 from 3 to 7
move 1 from 6 to 9
move 11 from 5 to 1
move 1 from 6 to 3
move 8 from 4 to 1
move 2 from 5 to 2
move 1 from 9 to 5
move 2 from 8 to 7
move 7 from 1 to 5
move 2 from 7 to 3
move 8 from 5 to 4
move 1 from 8 to 2
move 1 from 5 to 7
move 3 from 7 to 2
move 4 from 4 to 7
move 4 from 3 to 4
move 20 from 3 to 2
move 1 from 8 to 3
move 1 from 3 to 8
move 4 from 7 to 2
move 1 from 8 to 6
move 1 from 7 to 5
move 1 from 3 to 1
move 1 from 4 to 2
move 5 from 1 to 4
move 14 from 4 to 1
move 1 from 6 to 5
move 1 from 2 to 3
move 1 from 5 to 1
move 11 from 2 to 9
move 18 from 1 to 2
move 4 from 1 to 3
move 12 from 2 to 5
move 5 from 2 to 4
move 7 from 5 to 1
move 1 from 2 to 9
move 9 from 1 to 9
move 1 from 3 to 6
move 2 from 3 to 9
move 1 from 6 to 1
move 1 from 4 to 8
move 1 from 3 to 4
move 1 from 3 to 8
move 16 from 9 to 5
move 2 from 2 to 7
move 14 from 5 to 8
move 16 from 8 to 5
move 1 from 7 to 9
move 1 from 7 to 6
move 4 from 9 to 5
move 11 from 5 to 6
move 12 from 2 to 4
move 16 from 5 to 7
move 4 from 7 to 2
move 1 from 5 to 6
move 3 from 9 to 1
move 4 from 7 to 9
move 3 from 6 to 4
move 9 from 2 to 9
move 3 from 1 to 8
move 2 from 8 to 1
move 1 from 8 to 2
move 5 from 6 to 1
move 7 from 7 to 1
move 1 from 7 to 6
move 8 from 4 to 5
move 1 from 2 to 6
move 12 from 9 to 2
move 3 from 2 to 9
move 8 from 5 to 8
move 12 from 4 to 5
move 1 from 2 to 9
move 1 from 5 to 6
move 2 from 1 to 7
move 4 from 5 to 2
move 6 from 5 to 1
move 2 from 7 to 6
move 1 from 5 to 1
move 1 from 8 to 5
move 7 from 6 to 9
move 2 from 9 to 4
move 16 from 1 to 8
move 1 from 5 to 8
move 7 from 2 to 8
move 3 from 6 to 2
move 1 from 4 to 8
move 28 from 8 to 3
move 1 from 4 to 2
move 4 from 1 to 2
move 11 from 2 to 7
move 9 from 7 to 8
move 7 from 9 to 5
move 4 from 8 to 1
move 2 from 9 to 1
move 2 from 1 to 5
move 1 from 7 to 9
move 1 from 1 to 9
move 6 from 5 to 3
move 3 from 5 to 1
move 2 from 2 to 8
move 7 from 8 to 3
move 7 from 3 to 7
move 4 from 1 to 9
move 1 from 8 to 9
move 2 from 8 to 1
move 1 from 8 to 1
move 6 from 7 to 6
move 6 from 6 to 5
move 17 from 3 to 6
move 2 from 9 to 2
move 2 from 1 to 4
move 12 from 3 to 8
move 6 from 6 to 5
move 2 from 2 to 1
move 4 from 9 to 7
move 2 from 7 to 3
move 1 from 1 to 5
move 10 from 8 to 6
move 2 from 3 to 9
move 9 from 5 to 2
move 7 from 2 to 8
move 1 from 4 to 8
move 1 from 4 to 6
move 7 from 8 to 7
move 3 from 9 to 7
move 4 from 3 to 4`,
}

export const day04: Data = {
  example: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
  custom: `51-88,52-87
41-55,22-56
6-74,74-86
51-98,52-86
8-77,3-94
76-76,77-97
29-42,29-35
59-97,60-60
9-86,27-86
58-85,59-85
23-41,26-39
87-91,74-93
13-83,83-84
16-82,15-82
15-95,14-96
1-1,2-93
3-87,2-74
6-47,7-78
47-68,47-92
4-64,5-68
14-14,8-45
38-52,52-53
8-19,25-85
34-80,35-81
64-64,64-80
28-54,53-64
10-97,16-98
9-94,93-95
15-67,16-67
7-83,8-83
6-95,90-99
2-4,3-52
21-50,20-50
47-49,15-47
4-38,7-38
5-72,13-59
7-82,2-7
3-85,4-91
11-79,6-9
87-94,77-88
10-10,8-12
44-59,58-60
94-97,5-90
30-73,29-30
1-87,10-78
16-53,6-9
26-88,27-53
21-68,67-69
49-62,50-61
20-32,10-34
28-29,21-31
47-55,89-98
84-85,23-85
10-54,11-54
52-92,19-51
66-85,48-98
43-44,44-85
44-97,43-58
24-76,68-70
35-52,13-53
46-62,43-80
2-99,21-58
29-73,28-29
56-71,56-71
16-80,14-81
22-64,16-63
42-59,42-74
39-79,39-79
21-98,20-98
48-49,49-97
9-88,10-88
72-73,51-72
7-81,6-82
68-70,15-69
98-99,70-75
82-82,16-82
38-42,38-80
96-99,1-95
46-92,45-45
38-44,37-45
94-97,93-96
7-59,43-58
2-86,85-87
17-26,22-26
6-68,5-10
8-91,91-99
7-93,13-93
61-92,61-81
40-67,30-68
25-53,38-50
2-64,3-98
58-70,58-68
57-89,57-89
32-69,31-76
14-90,4-90
58-82,32-86
47-70,46-69
5-82,3-5
7-47,42-43
98-98,1-99
60-84,60-83
10-38,9-91
12-98,10-99
57-74,56-56
11-96,10-11
25-92,24-24
61-82,99-99
52-67,54-56
2-81,1-81
48-49,1-47
22-68,36-69
2-90,7-89
24-57,31-56
1-65,46-63
1-87,39-86
78-82,80-99
66-68,35-74
13-92,14-93
32-80,32-40
98-98,4-99
98-98,2-7
28-28,28-81
27-53,15-54
3-84,1-1
3-34,9-31
40-97,19-96
13-60,7-60
24-76,40-75
91-92,5-91
40-42,8-41
73-75,28-74
95-95,44-96
13-16,16-74
22-71,21-71
7-7,5-15
1-80,4-81
36-71,37-72
84-85,68-85
16-63,12-12
11-50,4-49
30-94,10-95
2-73,2-98
10-85,10-85
49-58,30-59
48-67,15-32
31-69,32-68
71-94,70-98
10-93,9-93
5-5,6-95
71-89,70-71
41-66,6-42
7-90,6-90
78-79,17-78
83-84,2-84
2-99,1-99
65-86,66-82
44-49,44-46
58-90,90-91
7-38,8-97
14-74,88-99
54-91,53-88
34-56,34-76
13-55,14-55
64-64,63-76
24-89,4-92
69-83,68-70
11-92,10-95
41-63,35-63
42-65,43-64
26-64,64-78
25-47,16-20
14-54,13-55
77-77,76-93
15-15,16-85
67-71,66-70
9-17,12-18
12-95,12-95
70-76,29-70
6-13,7-12
9-77,8-12
57-94,7-57
86-87,87-90
45-89,63-98
45-55,63-93
81-82,7-81
7-77,76-78
19-58,9-19
1-93,2-92
57-83,56-58
2-98,4-98
1-18,1-9
39-74,27-44
5-73,3-95
36-62,94-95
62-73,61-81
33-63,53-62
34-45,33-33
13-25,12-12
91-92,25-91
19-23,41-85
4-10,24-92
29-35,35-80
19-23,22-76
4-70,5-52
4-90,3-89
49-84,19-85
7-65,6-6
37-81,31-37
18-77,76-76
20-88,87-89
16-91,79-90
82-84,39-83
3-23,39-47
26-94,95-99
8-98,7-9
4-54,21-27
5-78,20-79
21-52,22-35
4-53,2-77
26-71,18-71
11-71,12-12
10-77,9-9
88-97,41-87
60-97,96-98
2-7,8-60
59-63,60-63
81-82,31-81
92-92,86-93
75-82,16-75
32-76,33-33
69-93,70-93
25-59,24-57
56-57,41-69
56-94,55-74
6-94,28-58
44-93,45-92
44-44,44-92
33-45,46-56
4-55,11-54
11-98,12-99
35-61,37-61
2-3,8-99
2-2,4-29
29-49,21-49
4-17,19-85
47-75,47-92
11-12,11-98
84-85,21-84
55-99,54-96
24-28,4-32
22-88,21-23
12-93,11-92
13-80,13-79
89-91,3-90
16-72,57-59
16-82,82-82
26-39,13-19
72-78,73-77
18-87,96-98
73-90,60-73
44-44,3-95
5-94,4-95
28-68,29-49
13-72,14-73
10-99,5-98
25-38,11-48
30-98,97-99
12-91,13-92
1-85,2-20
6-6,8-98
16-86,86-94
6-99,3-99
77-81,3-76
1-30,9-14
43-74,42-43
33-93,32-92
3-68,4-69
2-96,2-21
65-81,80-88
19-19,20-93
14-41,32-34
34-80,34-82
3-81,9-82
72-96,72-99
16-43,42-60
8-88,54-60
92-94,93-95
80-95,80-95
81-82,29-81
12-85,13-43
5-93,91-92
34-78,51-65
10-75,9-75
61-65,33-77
18-18,19-97
69-80,70-81
90-92,68-91
4-29,5-30
71-80,70-83
4-85,5-84
99-99,26-87
8-35,35-97
64-66,30-65
24-85,21-86
4-9,10-92
4-29,3-5
11-72,11-72
76-78,62-80
38-80,48-79
30-86,2-90
14-98,15-87
11-39,7-39
6-99,7-7
45-87,13-18
13-84,12-12
79-80,79-94
22-81,23-29
6-7,7-54
8-75,9-19
62-89,62-76
54-99,53-99
21-74,5-75
44-44,46-81
34-92,34-92
94-94,11-95
4-95,13-94
65-68,67-97
13-52,12-13
3-17,17-18
24-94,67-95
57-74,56-56
31-58,18-41
71-78,70-71
80-90,80-89
64-75,4-65
19-70,46-69
2-5,4-79
52-95,73-96
28-57,15-90
21-59,53-58
10-27,6-10
21-98,58-97
81-93,82-93
81-84,50-82
19-29,20-25
95-97,1-96
3-65,38-39
24-98,25-97
42-69,15-43
50-51,37-50
17-97,16-84
26-58,41-57
25-66,24-24
21-61,57-69
7-83,6-84
43-76,51-75
26-30,32-87
55-55,56-56
41-58,57-87
49-82,48-83
25-46,45-45
7-88,1-94
8-89,7-8
9-18,11-12
19-94,94-97
2-98,1-1
40-60,41-85
13-14,13-99
30-34,29-33
22-22,21-21
27-28,25-27
5-23,16-22
37-54,54-72
16-21,25-42
33-70,47-70
57-65,57-64
78-78,15-79
44-49,44-98
27-56,20-33
81-85,71-95
91-92,1-92
52-76,50-51
21-94,21-94
20-94,21-28
57-60,59-98
21-42,22-62
48-48,42-52
27-86,21-94
63-96,63-96
1-71,1-71
5-48,47-80
90-91,28-90
13-67,13-65
97-97,13-98
6-20,7-55
1-65,2-65
83-98,98-99
11-46,45-69
6-68,6-55
52-73,53-74
77-82,77-80
89-98,6-98
63-65,17-64
8-26,1-8
11-79,3-12
7-95,2-99
92-99,50-93
14-84,83-83
1-99,1-99
47-76,46-77
3-55,2-56
43-79,79-94
14-64,43-65
58-63,59-62
5-99,2-5
64-66,6-65
17-91,16-90
82-92,91-93
15-77,16-47
27-98,59-91
18-93,17-90
11-26,17-82
75-83,66-83
14-66,2-8
21-73,74-89
21-88,22-89
40-40,60-84
6-61,13-62
9-96,7-7
12-84,7-99
14-70,9-17
44-44,15-43
1-55,2-56
26-91,25-92
76-87,36-86
1-52,52-93
28-41,27-40
51-95,67-71
49-78,34-79
30-38,30-31
7-99,6-6
49-80,14-50
7-98,9-92
15-80,14-80
10-86,8-11
28-35,27-74
1-9,10-60
4-63,9-62
36-37,36-36
54-73,54-94
24-91,92-92
48-50,16-49
26-41,26-41
18-20,19-46
11-16,16-88
40-79,27-40
4-53,4-53
30-40,56-59
97-99,2-98
92-94,10-93
12-64,12-64
78-84,13-67
25-27,26-65
50-87,27-88
32-57,18-33
92-93,24-93
1-12,12-33
7-99,6-97
14-58,3-57
17-45,18-90
9-35,29-34
2-78,46-77
3-39,23-39
82-87,10-94
64-75,64-74
26-99,25-99
15-97,96-98
44-45,26-44
52-97,34-38
19-42,7-20
9-72,31-73
12-12,11-53
4-4,6-90
76-99,98-98
53-55,54-95
64-69,8-73
11-97,14-98
43-82,83-83
14-47,13-47
60-64,59-78
87-88,1-87
3-82,5-65
4-4,5-98
10-85,84-86
37-99,37-99
15-89,16-88
10-97,9-99
35-92,97-97
77-97,78-98
1-79,5-80
26-35,27-65
3-98,4-98
63-63,1-64
63-97,67-84
5-7,9-69
16-32,17-44
12-98,13-13
6-87,49-86
91-91,24-92
23-87,23-87
10-26,16-26
48-72,3-73
38-39,38-61
79-79,54-80
42-42,43-48
4-99,11-96
17-70,18-49
46-96,85-95
13-77,14-14
33-35,34-37
38-43,42-43
19-94,5-94
24-26,25-91
4-90,4-90
94-99,30-40
29-89,30-93
63-95,20-96
5-71,4-4
31-54,21-54
88-89,4-88
5-88,2-98
6-98,19-46
2-63,96-98
61-95,61-95
22-79,21-65
44-87,43-86
18-93,34-92
35-42,41-43
5-73,16-72
76-80,52-76
11-20,7-75
1-92,9-92
81-83,45-82
56-86,55-56
27-62,18-22
13-13,12-80
30-69,31-87
8-96,1-3
53-53,52-78
59-99,58-94
48-71,5-48
21-40,40-41
37-64,40-65
5-84,6-83
4-98,12-99
73-85,69-87
46-79,21-47
25-27,26-26
9-17,8-90
19-19,20-34
59-98,58-58
1-9,9-78
3-3,4-92
88-89,46-88
3-91,2-91
34-44,45-84
1-88,2-89
18-96,6-99
48-79,39-83
73-88,41-73
3-93,6-60
15-94,93-93
12-80,11-79
14-23,51-77
23-24,3-28
36-60,6-60
43-48,44-57
13-96,6-92
54-91,53-92
6-76,5-64
5-28,26-29
3-63,5-64
20-49,30-49
8-97,6-9
4-72,8-71
57-67,56-88
51-65,25-65
1-8,3-9
64-91,64-99
82-93,92-94
53-74,4-96
40-40,41-76
11-85,52-84
33-44,44-89
3-95,95-96
15-49,48-90
17-96,95-97
94-96,3-95
2-92,3-93
66-70,65-66
6-82,53-82
1-36,3-37
78-84,71-85
21-74,15-21
21-68,42-89
36-92,65-92
59-83,59-81
8-80,93-93
16-93,5-13
6-40,5-41
2-13,13-98
59-73,25-60
52-75,68-74
31-43,32-67
22-71,22-70
26-26,27-79
21-22,23-87
56-98,17-57
48-49,13-48
19-54,19-92
11-38,10-11
39-51,46-71
2-58,57-57
20-87,45-84
25-37,21-26
82-83,4-82
72-96,73-96
28-90,27-95
1-4,3-98
57-77,1-78
27-88,21-88
11-51,51-81
40-94,79-93
6-52,52-53
17-98,18-77
33-33,4-34
15-38,8-8
2-16,22-42
1-95,96-96
90-95,13-90
10-63,9-97
5-7,5-11
6-94,93-93
19-46,46-99
19-72,20-73
54-55,55-64
10-96,7-7
2-80,1-80
8-96,6-9
3-27,1-2
6-77,5-76
22-42,3-18
4-5,3-4
28-67,66-68
1-94,99-99
11-13,10-12
79-80,74-79
31-83,35-84
63-63,59-67
86-88,45-87
2-93,2-52
1-6,6-39
16-70,27-37
72-95,94-98
3-82,3-81
8-77,7-78
7-8,9-96
64-65,64-65
35-88,34-89
8-97,7-98
2-94,4-95
50-51,4-50
5-98,1-4
56-93,1-92
33-33,34-98
46-88,66-87
35-97,34-97
4-96,1-4
68-72,69-72
58-85,59-95
18-96,72-97
19-32,20-94
16-63,15-63
47-47,9-46
96-97,18-97
21-89,5-21
9-42,20-41
34-94,19-93
60-76,59-80
76-80,77-78
13-94,23-94
30-88,22-89
34-34,35-87
92-98,40-93
20-99,20-99
5-90,6-29
6-78,40-79
46-73,44-74
1-96,37-95
21-91,91-95
6-85,3-85
13-64,79-89
41-82,81-90
7-84,8-36
23-30,23-30
28-29,29-55
98-99,13-98
28-89,88-98
95-98,94-94
78-78,79-97
81-81,81-82
2-89,1-90
27-29,28-62
17-95,36-86
1-99,3-97
10-99,11-46
24-53,23-83
34-47,17-33
7-66,7-89
24-55,20-32
40-41,18-40
17-59,33-60
59-82,60-62
4-4,3-60
25-94,24-94
30-42,41-43
69-69,5-68
23-84,24-83
13-71,13-76
10-84,7-7
57-86,51-61
66-68,62-67
9-85,10-86
29-97,4-98
95-96,46-95
2-50,1-3
24-72,6-24
61-61,29-60
24-28,24-72
5-97,2-98
1-88,16-72
38-38,37-38
18-94,66-93
35-36,36-48
45-98,45-99
17-84,85-98
26-26,25-34
78-80,29-79
31-43,30-30
25-35,29-73
20-93,27-92
28-90,29-91
17-32,31-32
14-56,7-55
39-96,3-12
97-97,35-98
18-34,35-51
32-79,9-84
30-32,13-31
27-95,31-96
30-30,31-44
37-82,38-81
8-85,7-62
4-99,5-5
11-13,12-64
20-96,19-79
52-72,29-53
40-74,73-74
15-54,16-36
3-96,4-95
13-14,16-87
22-41,39-42
60-65,59-59
74-80,15-74
61-61,4-60
38-84,39-84
6-16,6-6
1-96,96-97
1-98,97-98
2-99,1-99
25-96,12-24
30-62,30-63
4-88,5-89
8-86,7-7
12-97,4-97
81-88,80-88
8-82,6-6
94-96,3-95
2-98,1-99
53-92,75-85
18-18,19-95
23-39,23-39
5-94,93-93
62-96,26-97
1-98,35-97
39-53,8-53
10-67,9-66
85-90,14-81
10-69,11-39
69-74,39-96
12-35,12-35
25-56,24-64
20-76,75-77
13-78,10-13
3-43,43-80
52-71,21-84
40-48,33-96
3-98,9-98
29-38,37-39
18-27,26-26
6-82,4-89
18-56,19-57
28-76,6-77
12-73,11-46
10-40,11-41
99-99,34-91
32-91,91-94
38-53,27-60
36-88,35-89
3-68,2-53
6-85,6-85
47-49,6-56
31-92,30-92
6-42,11-43
1-1,9-64
48-65,24-47
18-65,2-5
28-86,1-27
4-26,5-94
15-75,14-15
11-48,10-19
13-75,14-75
51-90,47-89
60-92,13-95
14-57,14-57
5-96,4-5
27-33,20-32
15-49,1-48
44-70,43-56
62-90,88-88
38-58,13-80
9-94,8-93
42-88,42-52
39-91,42-92
4-74,75-81
73-75,72-77
49-78,50-67
22-64,9-23
3-89,55-60
64-88,76-87
29-60,60-92
56-99,98-98
45-96,19-95
48-65,49-66
59-88,90-91
43-78,20-20
24-65,15-24
70-76,67-70
24-99,25-98
76-98,75-77
34-56,34-56
70-86,85-86
33-98,32-99
27-30,28-29
72-99,72-97
4-33,1-33
22-95,21-96
13-19,22-59
59-77,6-59
5-59,3-5
20-61,60-62
9-98,10-99
11-91,19-86
2-93,4-42
33-41,61-65
4-98,4-72
50-68,13-51
97-98,21-97
21-72,22-71
37-84,2-85
2-85,18-85
42-96,41-97
29-84,52-66
20-98,57-89
3-91,3-91
38-80,39-79
89-89,11-88
10-40,40-70
39-80,38-87
62-63,52-62
1-52,2-52
97-97,2-97
5-59,58-58
31-59,28-70
27-88,21-24
13-41,13-84
3-42,3-42
70-94,69-93
16-53,15-52
90-96,13-57
63-75,60-76
87-87,4-55
3-44,4-85
7-98,10-87
2-65,3-65
27-93,27-92
35-54,34-53
40-75,98-99
14-14,13-53
16-16,17-97
39-96,41-96
70-72,71-97
35-35,32-36
48-84,85-95
7-81,11-81
31-94,31-94
1-2,4-72
3-99,3-99
92-94,21-28
39-73,38-83
6-57,6-57
68-90,67-98
9-81,10-82
57-81,57-81
16-59,57-60
10-42,2-43
14-77,12-15
88-88,3-87
88-89,13-89
68-69,7-69
63-92,92-98
37-87,85-86
4-56,5-22
15-52,51-51
92-93,74-92
9-98,7-10
17-17,18-53
55-88,61-72
38-81,65-78
98-99,59-73
17-22,18-22
69-94,68-69
84-85,6-84
12-12,13-95
8-34,7-8
2-38,3-38
20-29,28-80
21-52,22-52
36-91,90-92
5-90,4-91
1-41,1-36
3-76,10-98
14-41,2-14
18-64,19-64
37-93,83-92
31-36,32-60
53-83,47-84
2-89,70-77
28-83,84-84
31-59,58-71
10-98,10-87
19-80,20-81
11-17,9-18
29-76,48-52
10-33,33-65
20-83,68-99
14-43,13-13
44-71,62-70
59-63,49-64
14-94,94-95
5-89,2-2
83-95,84-95
2-9,8-93
63-69,68-68
73-75,5-74
82-92,91-93
5-5,4-57
35-39,35-83
71-83,56-83
87-87,8-88
95-98,2-30
10-60,59-89
13-23,25-93
73-86,22-85
32-47,46-90
5-79,3-16
20-92,28-69
30-31,19-31
41-70,9-36
1-49,2-98
1-96,41-96
44-50,44-71
1-28,2-27
13-93,74-92
37-38,31-37
4-79,3-80
14-50,37-37
5-68,46-68
23-63,22-63
3-94,1-3`,
}

export const day03: Data = {
  example: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
  custom: `FzQrhQpJtJMFzlpplrTWjTnTTrjVsVvvTnTs
mScqSqqgcfPCqGPZcfGNSvTNsVVNSjNvWSNsNz
fPcPGqgCcHgFzQpJJtHtJH
DZDqqlrjplDHrNCmnBcHBMCRcJzb
RQFLStFvdcBbzdJbJM
PThQtwftTPFvtTPhvtFtfFtpZZllwjRNlsqNqqZjwpGlrZ
pPwtqgwJZPJLgQqSFlqhFFlqMd
DBmCWBBDWTRGvcVRTCCnnfQlFSdlzfhfdMWQfjhhQz
drmBVVCRgprPtrZp
HznjQjvmzDMVrQnMLJMMlfWgPSlJGWWJPl
BdcqqhcdBRpFhhZBthhctdJSJJWfgGFlJCSFgbWPCDJS
NdRTZdNqBwqtthpRBTTRqdtZrsLQVzrrzjzDwDsnmrQrnsrr
HZFZCFzZWszqsRTBZTNMhmthVTmhDppmMQVPpm
wjvSbJddvrvlrvnJSJJvlJmhPlhVPVtGVpQDBVMpphQP
frbrfrcvvnvjfwbcJgrrCBRsCFsNzRgRCHCqssRH
dDFNqNqZqPLNqvqTTvCLSPdZssGHClJQJcRHJGHHcHBcsMsQ
lrjmWgWWrhjgrppQHHMQrsQRJGcBJc
lVlmnwjmdTTSvVFN
FWNFHvQPmLGwwwSHtswwln
RfMJcDdfdcfdddfZjdchrtZmSmCZVtqVnZmrnrtC
JMmJcfjjphcghpgjhRGzGzBBGPFGNBvPTpFL
cVPVwStmmcQPBQPpSCppwhHZNNqHszNBhsNRNjqHzj
MfWdDgvdbnvgMTWgvgZfzmsZJHzNhqjqjRhJ
MDWMWGndMgFDnFLDwQrPPCSrCSVrlmGS
QLZmPdRdWmMsMDWZmsLWWrhMHcHGzHvGzFcvrvzNrc
tplSbLVBlvHHcFNnSr
VqfgwLlCJWmWQTfW
nRWvlvRbtLvdMCPFGL
wrfsJNNGhNzGrTgDMDLgPMLPfq
wcVhJQhwhrrBpmVblBRGSG
HHHcggrZLcQQcQll
GzfzTRTzmmFMwSNSwdSJQtNLNB
TGbmLMFTzVVVTMzmFMfFPMHPZhnjZCpHnhgnZnPWCPZZ
MRwwpVMHRspqVqwmccDlDrcHBBZgBl
jQfQQQjWWFBgmcgDfcZg
hvvSQzSnQQSWWQWSjTZVTRMshwVCssppwV
pvrTvCvtFppCHMMZcdDFdcZM
wLjTQnqljjSnlwjqjRgLcHHHMBDMZhBMHgHcbBDh
mqjqlSNqRqwSRrWCvzGmtfTfzs
TWScDCqCQQVBWDqWHsHswwBgRJzRhhHp
dPttGrvFfGjMjnjvshsJgsJLgghRgH
rFMlGdtjPffNnnrffSNcVCDqQqCQRqQRRN
GmBRbVpPbmJcwggBBgWW
LjsTCNNtddjHqLLgWwccqgfq
nsjNjntNtjHCsDwZmwZZVmmGSvSD
bwDDgNFtMMDbFsMbFwWWVcRcSpcgjgQWhWSp
lfTJJlvdfCffccWppRjRlcSc
RnzGdJJmsMNnMFtM
bsBTFsqqTTmFZTsQBWWznWCRshlJNJlCVh
GjGnDvDjvjPppHwwpwgrPPClJhNVRCzhhzJWlWlhNlvJ
ffdgLrgdLrDjdfHPbbZbttcBbcbLmntn
TNTwwvTTHNtTHNLLVqtqTSZBJnrnhhbrFJjZjnVZgghF
cplWfRlzcWfRCZZhFrGjBfjZjn
pddzDsRpDcclzCQMWBvNSmTTSqdvPPvqwqtT
DQTttwwLtQtVSDMJDRmmSS
ffsWfvrBWrPvwJhPhPSMPMVn
WsvsggFvwNLgHtNQ
llBbVDMTlFVdFDTbVggSVsqZqZZZqqvNJZJRNRWgtv
HhpjcHHvjPsqCsWcNcsq
GfpvnPvwFDTTFFDw
GMmFGMGFFgVwQHQwwM
cJtZNtZTbThcZtcZJJtTZWJPllgNgpPvVgpjHvQpRpHQNg
hWcJZcnhcJznbcBZLqSLDfCmHqnqCLsD
zQpjLpnhnsHTnlQLrMCCHPFrvvCMPcHm
ZfgdSBtNqBwlgSDfZDwtqSFvJCvrPrVvFmwCJFvrmmFV
dfbRNZBqDtgRNBNNNljLLjhGRGGWGLGTRhjz
hhrnfBzhtzZgDgDnBfrfDZsRpMNCNNWjwCCfGQGGNGCGQC
lcdPmHLSPDSdFDpQMLjCQQQCRGpN
lJSSbmPdVdVvdHbvSDFHHPlZqgBnttzgTsssTrqgbZbsTT
FsdsShrgggLDdbSDsgrGrlWHTpfRpTjjfFTzRTRjBWWp
mPvqCmJCqJNnPvPNPCvvLTTVjHjzNWHHTWRBRVTWVz
wJLvqPZmJtccncvZmJqqrghDGQwbdSGdsgGgQgQr
zFwtNJGtNFlpnwHccZjZbcpprsmc
PWQfBWhBgQgTWQRLThBqMSVDSbbDRsVDmsmZsSZDjr
fvQfWBfLqfTqhLhCvNFttJlCwGrrCC
fNrGLNrfNrGjllRRRPmWVL
tbJdcFbSSssZSmmpFcsSbwDWVWBlllVPDnnjBFjDRnBF
ZZJcvZctgNmmvMGhQm
HhhjFRhgrcRTFLvWVJVQWJVHDHQJPP
GwCmwBfGzfSCzCfwtmtzzJVWSVJJZrbWQQQqJJDZVJ
mtfzpGdststtBmfmCwrGRFcTcvjngjFnRcLnpLLn
rrwjdwLgVmVwHrfPCJPQBCBGmPtt
ccNZqbNnMMblNpTlNpnhhBPSJsQhJtJtChPJqS
vTWvNcWNWTFvnnvcgjzDLVQLgHVwWDrW
jNPgbNHbfLJgLzfz
ShvhhFVVDShFVqMSSSvZfffvPLtBBBBJJlpfLJJv
DqhnShhMnZZwCSDCMhChrRnNrNdNQbHNNPmjmdHN
VQVZGQFnzFTSsBfgzgfs
rjlpjtDrtMLZPMtPtpPZPwCsgSHgMHCCmCTWsgBWSBmg
pjvDqLwrlDtwqtqNLvtjpPPwRNbQRncQVQddZhRhJQbJncbG
PsBSqnSdQsFhmmmnppFc
TRhNvrTCvNTHVcfHbJVTpc
rhtWvGWLrjRqdSqqLLqdld
vPhfqPJvrMrnffDDhvpMjdzGMLdLLQpllLGQ
mbmcFSScGbSCcQlzwQQlclsg
BSGVCmCTZWCGGvnvfZHqqrDhHN
GSRfrzGRhzsGChjTBBlqBgjgCTCn
wHQwtDVDHwHHDJcDWJZwzHZBqTnnBFlvjFgBqnljjvBdBZ
JNmVJpVmNtDHJWHrbfPLhbGhrzRbpr
WcWcbzNPbDwBNvWBwRMPQmJZQRQZftRZGP
LhVHFgggTHCFHhfMQQSMMGQRMLLM
qnrqppFVHphqfDsNbzjrzbrN
cwgDrdLSrBrvvhDzCljjTW
VHtVZpspQtMQsVRQppFVQVHtCdPTPTzdjvhTzTTPRvjjvWhn
QQZpMdJsQFJHtMHdScwLwLJGrSScSwqw
ZsjNflGfRfRPrZNRFcffLwJdwcLdDBnwzzzDznVn
CTGvhhTqbtbgTqLJWdDntzWWdnLw
phCMgmQGvvHCvMhbTQQFsNsNFPZSfZjffmNsll
CNpCJHLNhhSSHZPgrFlFFWgpFpmzjj
qQttDVDwQGdQGvqDQfwbcVrrlljjzzmzrVJgrr
nvMDsqqqQvfvsqDnRSZHJPPZHhLHLS
RNNrrPfDNRQwQhjscghMqs
WVZlHvnZqtlLVLvwjwhsggTstMhwTw
vGHWLJlVWlmLVqRCGCFFNfqqGf
MNzqCnvqvqvCVLBvvCVCpVcRssncrPSTWGrPSPdGTcrP
hmHwFmQjFlhtZmHwtZjjddSSGcsdPrrGcQQQRGPW
fHbbFjlhZwmtwhfjmmwmmLbpLqzqvBzLzCvLNRMbNB
tQfLrtQPrrfDSSCVlDfLSrmbBjGvWjjLmWWWpWNNppmv
wdHhRTTndnRThdvnBFGpNBMnpvvp
JdqTHTHHRdqzsJRRzTRHscJdDSGCfDlqQZqlfZrZZCffqSSQ
hQMWLsgGJMMhsCHggQWhgspDWFPzZvPvptDvzvmtdtdF
BrBlrTBrNRbfnjNQlZDztPvpmpppmzvfdd
jQlQlqQVbVcsMgMgChhJVs
MtFMCTWRFRRtCRTTRTMGJddjLdstHvBzBHzHVVpL
lZSDnbDlnZPrbHpzJJsdSVJpBL
nNghhPrlZlgDTFhCfMFJRMQF
RGpPFZPRQZPFRGvpPQPpjvpmhnnCMjhmhgBgVgMVWBVgVM
wLtfNdNHmrNthCBgCbhnngWd
srSfwHfszsNmtswlrqQDGQFDRPJGDvzRppRJ
GVFFGvVWZLFsmssFRNfVvmGGJPpJTTqDBvTpqlpDvqbBtTPl
gQhzzChzrMQhjpzlzWzJpPpBJb
ghgWjcCjMgCHWdQMhdjChCmfwmRRGZZGVHLZHRfmNwVs
DnDVhdnrfSfpcGGjQQGdJddJ
bPWPRbRsRMsHNzDqTZcGBcqZqmmN
HvwPvvzMPwDCChDVwS
vTCCvTfWFDTtRPMvfWFlDFHBqGLpLzbwBgWwqzGqbBbB
cQcSNchSJSZShVJNnZrhSqBpgwGHHtGwqtbwLbqpbr
JNnJVsJscNstNhQsjnVVNlFfMmTMFfCTfjFvfPRPPF
VLFBsgffNFNqRvbz
ChltjTdjDhHpHZvdpjjZhwCpbNrbSzzbrNGMTMMNSMbWWNSN
vQjpttQhHnLsBQVLsQ
mbzQgTzRVVbsVdQgzzVRddmztFGWNGNNWnGtFSGBsrCNWCrC
jfJjvPPwLDcHDPvDDPDppLCWCFBGWntCBnrtFcrFWTGn
wpJPLjvpTTDpwhfgzmVMbqhdhVRgzl
PlcqbWClLmnqZVLq
THwdrrhddhhfJJhwLJhpQnDVnznnmZQQnSpfpD
vrFdvGsGHhhhwHjFGrFGJHdMCCcNgbWMPccRRccMFLNPPP
tbppJqcNtJnZzRJbPFsFPHfZrrshFDjj
GdwgwlLgGCndsDFrhDHHFF
SSlLnmmvqWNqmcqb
ZPFPPTZpZSWzCMMSzPBsFvhtlQvJQQtJhsVs
dmNbmgbrwDNmbcDgwNdcwdLsnhlJlnvtsBJnhVQqqnstLB
bNGfDGgHHVwbwNwVfgmRMzCzzCSHjSRZSZCTRS
dDTffQdqQQLBLnVLLQvL
rrBHZZcgJcrLvNLtLgRLbN
cjjJhrFlhZwFFzwJzmTBBdmTsDPzDsBP
ClGrJJMNCrGQqlcPvWgnDP
ZBvbjHpSwBVVVcWjjjqQ
BLSbbwsHSTBHwmLHHLbBsSTFdrfvCrtmdzfGJzrdzGJddGfh
gljWRwmSjtJWjJtJjgjSZfVSTVVHGZSVHcVchZ
pBzLFQpPsFBGcGBTThfB
pFpQzFLPLpvQFQnLbsqqGddgjbmwRldwtWmlGWwj
PDQDMFQBMfWPvjdLLndLjrmsMj
qZqVzTRRqHtvZGGtVqTTzVjLLsrmJCddnLjrjHsrhdCr
GzwcZtqNzqvNqwzZVGRwSzbpWfFbWPlWFpNDBfQfFNNf
dfRszdzVdsjwdhLwCCqwGllHvPGPwG
SpJtBLFgcGqHQClqZF
JrttrtcTmSSLrmtBTrNgnBJjbNhhbhzRdsVdMhNjhMMhVd
MPFSCfSMqVSBGrtzlvccfQctzbzl
hZNjTHWWTZwshbLvmlWpBzmbmm
dRTTJNDNhjsJqBBMMgrJPVVr
WnVzDMjlDVWwwHgwhmgNhNNsJh
qfvrLNCcbLdvpcvbrPPqCsGhSJGTTBspTshBpTBBms
ZLvvZfrPfPCLbCFFzjVQzRnNNMVzDQ
nllbFTTpTFTBcnCjQPqQdZRQZhCb
tvWszrrztvSmzQQvrDmZRjjjPPDVqPRdZRdCPd
gfzvSsftgQHQHgQl
GVbHRRGRLpdmGWTm
gSPPltPlrlvccFccPlcJNCTpnnmpMCLMMmWfdRmMSS
FzNJRhhvPFRvQwzqjqzBHZZj
PhZSpFBPBFsNmjBVllltBj
JMGLnrrnbfffrdqRqPHnnqLDVTDDjgmRgwtmjDljlDVlwl
LHMqPqPnnqGLWJPMnndrGfSWppzvvFSChFFFvvzQSQZz
RSWWssbvnnCqZnWsRCnssWrTggNhgbNHBgQjhhQBgjNT
mcpzcppzczcDGVcPcDLLGLjmrMNTNtQNHhMHrQBQNTgN
LVpPfcjjWvsFFnFf
MpddpdCpJdJlbdMvBHMnnsHqSRvG
PWvZfFmZrrfmwWwFznBnqRRSGcsBVmVBRG
zjzzhQPQvzjLPQzwffrwrtlTCDtJDlgJLltpTTJlTl
TvTWjjzpznGttFFZccrrPrSZllcB
gNNSqHMqsMHQJHNZCDDCZDqLZdlZBD
SMQNSRNbRRHwhwhsRmtnvWVmmnbGnjmpGn
ccSVQjCQddTsFJcH
gLppBfgfmvCRFdsddTJJgb
WMLMmWGGBZWZLCtvDhlSSDGlwhSPSzSP
TpqVGVHFQGmqSqPZdccNCzzhdwCjNG
fffbbvftMrBMDDcCccCZCjlvhCCd
RLWMnbftDhnMRtfBftRJMtLMgFgHmmpmPmSmmQFPPLHHVTQS
nRvwQSDNcpVJJcJR
qZMjBhjhZMMBzLBGLGrjJbTPVTpbdPPdVbVb
ZZpmFFZlfGqfmmGMzlfmMmnWQDtHtSvnWWNSHSSstFtS
bFDGZjGDbbRSgLtN
CphJVfJWCTBgvfLHNRcwnt
WVhPWBTzzChzhhhBmrpPPCJZDQtdMlrjFQdrFqsjdrQsFG
ZBpVQHHVMMWWdmmLWw
lQhhrjcRttrqbvQLNwdDWzmNSDmStz
QbGqhcbvcsqvCCHnsCZHCnTn
tlWtQTTTJjTQtVnmrbnPWVShVC
MDMGGzsHcwFgGZBqrmmPSnbqVmNVGC
sZFPwHcMZDBRTlvQQJttTQTR
FhVRfGptMGMnZhRFBNRBCCNHHNvTNTRC
zmwrLLSjrbzmNlcvvrHvDPCN
JLwjQdSbjdbSdqJQFGVqFVMgnGHMfGVV
fffZWrJqZSHWTWHqSvrgDhggzRjttsDhpDgs
PGlBLcBBbnnbLLFbGLBjRgjFTFVzshtzpgsppz
TGCPnMPQlGnPmclPlnnQmbmHJvNvfHdqwddwvvZfCNHCfW
ClLwpspTPrTFZCdzFbZdbQ
RRMWfRgWVRMRQBZZScVczVGFbjNb
MfnvMqWmslvDhQPw
hdndSdqsTddBhdcmmNHFDcqHttPF
JjMzzMZQGwZGZJzMzZJQzGJFvPvNPtFmvmNmDvcFtvDHMv
gZwzQwJfGVJQJbGLBsSTSTdTbCWDBSnd
ZZCHZRzMZGRMhMMVVFNThrdd
SgsccSPmmgqssSlqsgcmscSqlhpFdVThjphNrdrhjdwdhFJN
vmttqTcqvLqqmPccmqSBbRWnWzQZZZZBHnQCzHDH
GgPnGdSPBpGsLTBL
rVNJjmwZqtZZshltFTtvRFsL
mqmWrZVqWjrqZMNwPMQQbsddgdsbsgPz
LZLVvjZrggHLJggSZDgrnPnQnRnppVRllntRdPFz
chMCzbqGmhNhhbBCMBdFnpfqFnltRRQnlPpQ
TChmWcMMTmBswJzZZrWrvzgg
gngRNBNRBsNFFBgfgbLLLnqdSLvLTcbLbd
GWtlChlVMllcZSDWSLbdZL
lljjGlhMGrGJpsFdRJfsfzfz
jVTdrnGQcQtTTTFQqBqsgHHFgsqf
ZZLbPLzDzPZCmsgqsBHt
wDzDlPblRDPLPvhvwtdnnhdrnrMGWMVGMThj
spjjpjvjpjmQjrpCMfSlfzrPBl
dHFntHWnnbRVFtnbcqHFzBCCCPzfPMlcCSlgllzc
RLbVWHnnSWtnHFbdbVRdNNtQsjsQTjDLwmGTmTssQwmLGJ
JbJJSLMhRMSLhNqqwFDwFNcFqL
GcpnGnznnpzpzGpffNTNTwTfwdDNNdTFdD
nllnlPGWQWHcGpzzQGGzGvHGJbVVtJSChQVbmtmVJrmrmbRm
GFsFrzwrflmtdtbltG
ggLPDngCJncNLJRDwgnllmJqjWMjhjhjWWmWjj
nBNRNPgpRgDLTgNwfsSHVBQHVHwsZr
WwvnvWvcFtwtSFSF
zBZZZRQSzMBSgSVJGjGTPTGFzCzmmj
fZDrpZZfRfMgSQDDBhgQghDHsnbrcNlWnnLWHLrHsWnllc
ZVncdPPwVPdhZngnqHWHNNvTHvlMvn
fSLjjLSGGBjTTHqvBqrMNT
RSSSDGRtSGZthTTctmtg
rtzrfJbgJHRfGRZLPR
hdVhlllmFlFPLwHmsRGGZP
nTWhRjTBTWlvNQgnJSSbrJtz
JgVTpBpfvgpTDDJFJvTgggtlFlNNMRLNNzNNZRNHMRCLlF
wbPWcSGbGqWDlnNWMMMCLMWZ
wrsGcbrcbcqwDwbcmGvQBQgTTsdVJgJsVdQf
mztrhgJtDrhgcrZmnhbnzbhcMTMPlBCPBGVGTMVGslCCPGDs
FLRQmjjFSQpQwLlPsMsCpvslvPCB
fNLLwSdSwWSWjwmrtczZhhrJzdzh
HHwCwJFmHZttZCfCSffSMHcVDMcPBRPcPRDhPghM
nvQLsTnLslnLvpzGTssnsRPDMhPgVPVgtcVMRPgVQQ
vnsTGWlTLsWTLLvNsGWlsZrwmZCJddjFmtJJNZFftj
hbjSTvSJTfcSwcPSPfTbfHszVVFpGnpJpsHFnHVVls
rtZrcQrRZZQrmZBQlCGppnppHzpVFCGR
WmLqmgNtcLNQWTbPvfPwbbdb
HzZgsdHglHlzdHsFtsNNJSlNcSpjcjlrrNVv
wqqWRPPqwmbcqPjQVvSPJJrVpv
qqBBqmWRhqRLqcBnhzzztgnTdDHnHsFsHn
rJPFVwwsrJwmdVrLWJvvRBWBvbzWlb
nDZcNGNpjTpHncvpZCDnTNZGhlWzQhWbpRRQlQhpWWSWLlQb
CDNntnCCHnvmqPfwtFdVqd
gqBwgBjCswwgqNBNCVDDTVdhlSDTDcZc
HvRRFMzRRRRMpHrtTllfhZHHSShHTf
PmlGLPrppMrrmFFmLMWRjbsjnsjwQNJWnbQjWgBN
pDggpFgRghZjBFPPnPPFrt
cwTfLwBVwCWbLcVTVVvrdndGjMHrnGJtnttdMC
NTVcWNvcBSpgNqspRQlN
DLDgFlDmNZfjfnJZSF
tctvttzvGGzvrHqtVVdwnJGSSnnjjZdWTdwW
zvpcrbpHpqJJsPbPlLlhmhglPQ
pvHHvssFCFZQNCftttdQdd
VgTGTTVGgLjDjlLGzgPVMTNwmcwQmMQfQtmdcmwMJwNm
TPjTDjfGWTLLljgzrWpZZbsqrFqhqbps
ppVLcfcwSLgpSLVLgWwtfshDNDqvWvGvlQZvDNHQHjqq
MPrzmdRrPPrCJFnMnMRRFRPdqqZQNQvjvZDGDlHhQvGNDG
BmBMBBJTMmPBJMMFCCFJRmrsTlVpVbpwLSVwLsgcwTVlVc
SSGzmFRzmRGLgSSmGMJFnvfvJnJVnJQnMl
cBpjHtjwNfcpNZtppHtCMlMPMlJBVlVQlvJPvJ
dNtNZwqWfqtqZWtHttsqHqrRrrdRTLbmmzSLmTGGmbrg
RrrddnrgnRbbgWdGrfnwgQwjDjDpvTpBQTwBPP
MHCStZJzSwvPjWQD
mcJWVHCCLcGLbdcn
PlMsdjPdGMjdPSrSjgddbLbmHHTszHZzpHmsTFvmpzZzmN
ntRJQVRfcQhcQWhnchBJWntTFTTTNTSpFtztmZFDTpDZ
hQfcfCBSwCccVJhSJnrPPGLqPlbPLCrqldgb
vgvWDMZvGpcqgqsP
tSdtjLHLQLHjdFdDddQSQhwlsGqwQlqqqhQsPhGc
tbRjtTLFRvTZDBrMrV`,
}

export const day02: Data = {
  example: `A Y
B X
C Z`,
  custom: `B Z
B X
C Y
B Y
B Y
A X
A X
B Z
A Z
B Z
B Y
B X
C X
B Y
A Z
B Y
A X
B X
C Y
B Y
B Y
C Y
B X
B X
C X
B Y
B Y
B Y
C Y
C X
B Y
C X
C X
B Y
B Z
C Y
B Y
B Z
B X
B Y
B Y
C Y
B Y
C Y
C Y
A Z
B X
C X
B Y
B X
C X
A X
B Y
C Y
B X
C X
C Y
B X
B Z
B Y
B X
C Y
B X
B Y
B Y
B Y
B Y
A X
A Z
B Z
B Y
C X
B Y
B Y
C Y
C Z
C Z
C X
B X
C Z
B Y
B Y
C X
C Z
C X
A Z
C Y
B Y
B Y
B Y
C Y
C Y
C X
C X
C Z
A X
B Y
C X
B Z
B Y
C X
B X
B Z
A Z
C Y
B Z
C X
C X
B Y
B Y
B Y
C Y
C X
B X
B Y
A Z
A Z
C Y
B Y
C Y
C Y
C Y
B X
A Z
C Y
C Y
A Z
A Z
B X
B Y
B Z
A Z
B X
B Y
C Z
C Z
B Z
B Y
B X
A Y
C Z
C X
A Z
A Z
B Y
B Y
C Y
C Y
B Y
B Y
B Y
A Z
C Y
C Z
C X
A Z
B X
B Y
A Y
A Y
B Y
B Y
C X
B Y
B Y
C Z
B Y
B Y
A Z
C Y
B X
C X
A X
C X
B Y
B X
A Z
C X
C Y
A Z
B Y
A Z
B X
B X
A Z
B Y
C X
C X
A Z
A X
C X
C X
C X
B Y
C Z
C Y
C X
B Y
B Y
B Y
A X
A Z
C Y
B Y
B Y
A X
C Y
C Z
C Y
C X
B Y
B Y
B Y
B Y
A Z
B Y
A Z
B X
B Y
B Y
B X
C Y
A X
A Z
B Y
C Y
C Y
B Y
B Y
C X
B Y
B X
A Z
B Y
B Y
C Y
B Y
B Y
B Y
A X
B X
B Z
C Y
B Z
C X
C X
B Z
B Y
A Z
A Z
B Y
C X
A X
C Y
B Y
B Y
A X
B Y
A Y
C Y
B Y
C X
B Y
A Z
B Z
C Y
B Y
B Y
C X
B Y
B Y
B Y
C Z
A X
B Y
B X
C X
C Z
C Z
C Y
C Y
A X
C Y
B Y
A X
C X
A Z
C X
B Y
C Z
C Z
A Z
A X
C Y
C X
B Y
C Z
B Y
C Y
C X
C Y
B Y
B Y
B Y
A X
A Z
B Y
B X
B X
B Y
B Y
B Y
A Z
B Y
B Y
A X
A X
A Z
A Z
B X
C Y
A Z
B Y
B Y
C Z
C X
C Y
A Z
C Y
C Y
C Y
C Y
C X
A Z
C Z
A Z
C Y
C X
B Y
B Y
C Z
B X
B Z
C X
A Y
C Y
B X
B X
B Y
C Y
A Z
A Z
B X
B Z
B X
C Y
A X
A X
C Z
B Y
C Y
C X
B Y
A Z
B Y
C Y
B Z
C Z
C X
B Z
C Z
B Z
A X
C Y
A Z
B Y
B Y
B Y
B Y
B Y
B Y
A Z
C Z
B X
C X
C Y
C Y
B Y
C X
C X
A Y
C Y
C Y
A Z
C Z
B Y
B X
C X
B Y
C X
B Y
B Y
C X
B Y
B Y
B Y
A Z
C Y
B Z
B Y
C X
B Y
C X
A Y
A Z
B Y
B Y
B Y
A Z
B Y
B Y
B Y
B Y
B Z
C Y
B Z
B Z
A Z
B Y
B Y
C X
A X
B Y
A Z
C X
C X
B Y
B Y
A X
B Y
B Y
C X
B Y
C X
B Y
B Y
B Y
B Y
A X
B Y
B Z
B Y
A Z
C X
C X
C Y
A Z
C Y
B Y
B X
A X
B Y
A Z
B Y
C Y
B Y
B Y
C Y
C X
A Z
A X
A Z
C Z
B Y
B Y
C Y
B X
C X
B Y
A Z
B Y
C X
A X
C X
C Y
C Y
B X
B Y
B Y
C Z
B Y
C X
A Z
C Z
C Y
A Z
C X
C Y
C Y
C X
B Y
B Y
C Z
A Z
B Y
A X
B Y
A X
A X
C Y
C X
A Z
B Y
C Y
C X
B Y
B Y
B Y
B X
B X
A X
C X
B Y
C Y
A Z
A Z
A Z
B Y
A Z
B Y
C X
B Y
C X
C Y
A Z
B Y
B Z
A Z
B Y
A Z
B Y
B Y
C Z
B Y
B Y
A Z
A X
C Z
C Z
B Z
B Y
A Z
B Y
B Y
B Y
B Y
C Z
A Z
C X
B X
B Y
A X
A X
B Y
A Z
A X
C Y
B Y
C X
A Z
B Y
C Z
C Y
B Y
A X
C Y
B Y
B Z
A Y
B Y
B Y
A Z
B Y
C Z
C X
B Y
A Y
C Z
B X
A X
B Y
B Y
B Z
B Z
C Y
B Y
B Y
A Z
A Z
B Y
B X
C Y
C Y
B Y
B Y
B Z
B Z
B Y
C Y
A Z
B Y
A Z
B Y
B Y
A Z
A Z
C X
C Z
B Y
C X
B X
A Z
B Y
B Y
C X
B Y
B Y
B Y
B Y
B X
B Y
A X
B Z
A Z
C Z
B X
A Z
C Y
C Y
A Z
B Y
C Z
C Z
C Y
B Y
B Y
B Y
A Z
B Y
B X
C X
B Y
B Y
B Y
B Y
C Y
B Y
C Y
B Y
C Y
C X
A Z
C Y
C Z
C Z
B X
C Y
B Y
B X
C Y
B Y
B Y
C Y
C X
C X
A Z
B Y
C X
A Z
C Z
B Y
B Y
C X
C X
B Y
B X
C Y
B Y
B Y
A Z
A Z
C Z
A Z
B Y
C X
C X
B X
B Y
B Y
B Z
B Y
B Y
B Y
B Y
B Z
B Y
C Y
C Z
B Y
C Y
C Y
C Y
C Y
A Z
A Z
C Y
C Y
A X
B Y
C Y
A X
C X
C Y
A Z
B Y
B Z
A X
B Y
B Z
B Y
B Y
B Z
C X
C Y
B Y
B Z
B X
A Z
B Y
C Y
B Y
B Y
A X
C X
B Y
C X
B Y
C Y
A X
A X
A Z
C Y
B Y
C Y
C X
B X
C X
C X
A X
A Z
B Y
B Y
B Y
A Z
B Y
B Y
B Y
B Y
B Y
B Y
B X
B Y
C Y
B Y
A Z
B Y
C X
C Y
B Z
C Z
B Y
A Y
C X
B Y
B Y
B Y
C X
A Y
C Z
B Y
C X
C Y
C Y
C Y
C X
C Y
B Z
B Y
C Y
C X
B Y
B Y
B X
C Y
B X
C Z
B Y
C X
B Z
C X
B Y
C X
B Y
C Y
C Y
A Z
C Y
C X
B Y
C X
B X
A Z
B Y
A Z
A Z
A Z
C Y
B X
A Y
C Y
B Y
B Y
C Y
C Y
C X
B X
A X
A Z
C X
A Y
B X
C Z
B Y
B Y
B X
C X
B Y
B Y
B Y
B X
B Y
C X
B Y
B Y
C Z
C Y
B Y
C Y
B Y
A Z
C Z
A Y
B Y
B Y
B Y
C Y
C Y
C Y
B Y
C Z
B Y
C Z
A Z
A Z
C Z
C Y
C Z
C Y
A Z
C X
B X
B Y
C Y
B Z
C Z
C X
B Y
A Z
B Y
C X
B Z
A X
B Y
A Z
C Z
C X
C X
C Y
B Y
B Y
A Z
A Z
B Y
B X
A Z
B Y
C Y
A X
C Z
B Y
B X
B Y
C Y
C Z
B Z
A Z
B Y
A X
C X
B Y
A Z
C X
B Z
C Y
C Y
C X
C X
C Y
B Y
B Y
B Z
B X
C X
B Z
C X
B X
C Z
C Z
C X
B Y
C Y
C X
B Y
A Z
C Y
C Z
C Z
C Y
B Y
A X
C Z
C X
B Y
C X
C Z
B Y
C Y
B Y
C Y
A Z
B Z
C Z
C X
B Z
B Z
B Y
A Y
C Y
C Y
B X
B X
B Y
B Y
B Y
C X
B Z
B Y
B Y
B Y
C X
A X
C Y
A X
B Y
B Y
B Y
B Y
B Y
C Y
C Y
B Y
B Y
B Y
B Y
C Y
B Y
C X
B Y
B Y
C X
A Z
A X
C Y
C Z
B Y
C X
B Y
B X
A Z
B X
B Y
B Y
A Z
B Y
B Y
B Y
B Z
A Z
A X
B Y
A Z
C Y
B Y
C X
B Y
C Y
B Y
B Y
C X
C Y
A Y
C X
C Y
B Y
A Y
A Z
C Z
A Y
A Z
B Y
C Y
C Y
B Y
B Y
B Y
B Y
A Z
B Y
B Y
B Y
C X
C X
B Y
C X
B Y
A Z
B Y
B X
C Z
C Y
A Y
B Y
C Y
B Y
C Y
C Y
C Y
C X
C Y
B Y
B Y
C Y
B Y
C Y
A Z
A X
B Y
A Z
B Y
C X
C X
B Y
C Z
B Y
B Y
C Y
B Y
C Z
A Y
B Y
C Y
B Y
A Z
C Y
B Z
C Y
C Y
C Z
B Y
C X
B Z
B Y
B Y
B Y
C Z
B Y
B Y
B Y
A Z
C X
B Z
B Y
B Y
C Y
B Y
C X
B Y
B Y
C Y
C X
C Y
B Y
B Y
C Y
B Y
A Y
B Y
A Z
B Y
B Y
B X
A Z
B Y
B Y
C Y
C X
C Z
A Z
A Z
C X
B Y
C Y
B Y
C X
B Y
B Y
C Y
C X
B Y
B Y
B Y
B Y
B Y
C X
B Z
B Z
A Z
B Z
B Y
B Z
B Y
C Y
A Z
A X
B Y
C Z
B X
A X
C Y
B Y
B Y
C Y
B Y
C Y
B Y
A Z
B Y
B Y
A Z
B Y
B Y
A Z
B Y
B Y
B Y
B Y
C Y
B Y
A X
A X
B Y
B Y
A Y
C Z
A Z
A Z
B Y
A Z
C Y
B Y
B Y
B Y
B Y
C Y
B Y
A X
B X
B Y
B Y
B Y
B Y
B X
C Y
B Y
B Y
B X
C Y
A Y
B Y
B Y
B Y
A X
B Z
C X
A X
C Z
B Y
B Y
B Y
C X
B Y
B Y
B Y
B Y
C Y
B Z
B Z
B Y
B Z
B Y
B Y
C Z
C Y
B Y
C Z
C Z
B Y
C X
A Y
B Y
B Z
A Z
B Y
C X
B Y
B Y
C Z
A Z
B Y
B X
B Y
C Y
B Y
B Z
B Y
B Y
C X
C X
C Z
B Y
B Y
B Y
A Z
A X
B Y
A Z
B Y
B Y
B Y
B Z
C X
C Z
B Y
B Y
B Y
C Z
B X
C Z
A X
B Y
C Y
B Y
A Z
A X
C X
B X
A Z
C X
B Y
C Y
B X
A Z
C Y
C Y
B Z
C X
B Y
C X
C Z
C Y
B Y
C Z
B Y
B Y
C X
B Y
B Y
B Y
B Y
B Y
B Y
C X
B Y
B Y
B Y
A Z
B Y
B Y
C Z
B Y
B Y
B Y
C X
A Z
B Z
C Y
C Y
B Y
A X
C Y
B Y
C Z
B Z
B Y
B Y
C Y
B Y
B Y
B Y
C Z
A X
B Y
C Y
A X
B Y
B Y
A X
B Y
A Y
C X
A Z
A Z
C Y
B Y
C Z
C Y
C Y
C Z
A Z
A X
C Z
B Y
C X
A Z
C X
B Y
B Y
B Y
C Z
C Y
C X
C Y
A Y
C X
A Z
A Z
B Z
C X
B Y
B Y
C X
A Z
C Z
C Z
B Y
B Y
A Y
C X
B Z
B Y
B Y
C X
C X
C Z
C Z
B Y
B Y
B X
B Y
B Y
C Z
C Y
C Z
B Y
B Y
B Y
C Y
B X
C X
A Z
C X
C X
C Y
B Y
B Y
C Y
B Z
B Z
C X
C Y
B Y
B Z
B Y
B X
A Z
C X
B Z
A Z
C X
B Y
C Y
C Y
B Y
B Y
B Y
B X
A X
B Y
A X
A Z
C Y
B Y
B Y
B Y
B Y
B Y
C Z
B X
B Y
C X
A Z
B Y
B Y
A Z
B Y
C Y
C Z
C X
C Y
B Y
B Y
B Z
B Y
A X
C Y
B Y
A X
B Y
C X
A Z
B Y
C X
A Z
B Y
C X
C Y
C X
B Z
C Z
B Y
C Y
C X
C Y
B Z
B X
A X
C Z
B Y
B Y
C Y
B Z
C X
C X
B Y
B Y
C Y
B X
B Y
C Y
B Y
B Y
A Z
B Y
B Y
B Y
A X
A Z
B Z
B Z
B Y
A Z
B Y
C Y
B Y
C X
B X
B Y
B Y
B X
C Z
B Y
C Z
C X
B Y
C Z
B Y
C Y
B Z
C Y
C Y
C Z
C Z
A X
B Y
A Z
B Y
B X
A X
B Y
B Y
B Y
C Y
B Y
B X
B Z
C Z
B X
B Z
B Y
C Y
B Y
B Z
C X
A Z
B X
B Z
C X
C Z
B Y
A Z
C X
C Y
B Z
B Y
C Y
B Y
C Y
B Y
B Y
B Y
C Y
B Y
C Y
C X
C Z
B Y
B Y
B X
C Z
B X
A Z
C Y
A Z
C X
C Y
B Y
C Z
B Z
C Z
C Y
C X
B Y
C Z
C X
B Y
B Y
B Y
B X
B Y
B Y
C X
A X
B Z
C X
C Z
B Y
C Y
B Z
C Z
B Y
C X
B Y
B Y
A Z
C Z
B Y
C Z
C X
B Y
B Y
C X
C X
C Y
B Y
A X
A Z
B Y
C X
B Y
B Y
C Y
B Y
A Z
A Z
C X
C Z
C X
C X
A X
B Y
B Y
C Y
C Z
C Y
B Z
C Y
B Y
B Y
B Y
C Y
B Z
B Y
B Y
B X
C Y
C Y
B Y
A X
C X
A X
C Z
C Y
A Y
B Y
B Y
B Z
C X
C X
B Y
A X
B Y
A Z
B Y
A Z
C X
C X
B Y
B Y
B Y
B Y
A X
B Y
B Z
C Y
C X
C Z
C Z
B Y
C Z
B Y
B Y
C X
B Y
A X
A Z
B Y
A Z
C X
B Y
C Y
B Z
C Z
B Y
B Y
B Y
B Y
C Y
C Z
B X
B Y
A Y
C Y
B Z
B Y
C Y
A Z
B Y
B Y
C Y
C Y
A Y
C Y
A Z
C Y
B X
B Y
B Y
C Y
A Z
C Y
A Z
B Y
B Y
B Y
B Y
A X
C Y
A Z
B Y
B Y
B Y
B Y
B Z
C Z
C Y
C X
B Y
C X
B Y
B Y
B Y
B Y
A Z
B Y
C Y
C Y
A Z
A X
B Y
C Y
C Y
B Y
C Y
C Y
C Y
C Z
A Z
C X
C Y
C X
B Y
B Y
C X
C Z
C X
C Z
B X
B Y
C Z
B Z
A Z
C Y
B Z
C Y
B Y
A X
B Y
A Z
B Y
A X
B Y
B X
B Z
B X
B Y
B Y
B Y
C X
B Y
B X
C X
B Y
B Z
B Y
C Y
B Y
B Y
C X
A Z
C X
B Y
C Y
C Z
B Y
C Z
B Y
B Y
B Y
B Y
C Z
C X
C Y
C Z
B X
A Z
A Z
B Y
B Z
C Y
A X
B Y
B Y
A Z
B Y
B Y
B Y
B Y
A Z
C Z
B Z
C Y
A Z
C Y
B Y
B Y
B Y
B Z
B Y
C X
C Z
B X
C X
B Y
C Z
C X
B Y
A Z
A Z
B Y
B Y
B Y
C X
A Y
B Y
B Y
A Z
A Z
C Z
C Y
B Y
B Y
A X
B Z
A X
B Y
A Z
B Y
C X
B Y
A Y
B Y
B Z
B Y
B Z
B Y
B Y
C Y
C Y
B Y
C X
C Z
B Y
B Y
B Y
C Z
A Z
C X
B Y
B Z
B Y
C Y
B Y
C X
B Y
B Y
C Y
B Y
B Y
B Y
B Y
B Y
B Y
B X
B Y
B Y
C X
B Y
B Z
A Z
A Z
C X
B X
B X
C Y
C Z
B Y
C X
A X
B Y
C X
C Z
C X
B Y
B Y
C Y
B Y
B Y
B Y
A Z
C Z
C X
B Y
B Y
A X
B Y
C Y
B Y
B Y
C Y
B X
B X
A X
C Y
C Z
C Y
B Y
B Y
C X
A X
A X
C X
B Y
C X
B Y
B Y
B Y
C Y
A Z
B Z
A Z
B Y
B X
C Y
B Z
B Y
A Z
B Y
C Y
B Y
C Y
A X
B Y
B Y
B Y
C X
A Z
C Y
B Y
B Y
B Y
C X
B Y
C Y
B Y
B X
C X
B Y
B Y
C Y
C X
C Z
C Z
B Y
B Y
B Y
B X
C X
B X
A Y
A Z
C Y
A X
B Y
B Y
B Y
A Z
C Y
C X
C Y
C Z
A Z
B Y
B Y
B Y
B Y
A Z
B Y
A Z
B Y
B Y
C Y
C Z
C Y
A Z
C Y
B Y
C Y
B X
B Y
A X
C Z
C Z
A X
C X
C Z
C X
C X
B Y
A X
A Z
C Y
B Y
C X
B Y
B Y
B X
C Y
C Z
B Y
B Z
A Z
C Y
B Y
A Z
B Y
C X
C X
B Z
C Y
B X
B Y
C Y
B Z
A Z
C X
C Y
C X
C Z
B Z
C Z
B Y
B X
B Y
B X
B Y
B Y
B Y
B Y
C X
C X
C Y
B Z
C X
B Y
B Y
B Z
C Z
C Y
B Y
B Y
B Y
C X
B Z
B Y
B X
B Y
C Y
C X
C Z
C X
C Y
B Y
B Y
B X
B Y
C X
B X
A X
B Y
C Y
B Y
A X
C Y
B Z
B Z
C X
C Z
C X
B Y
C Y
C Y
B Y
C Z
B Y
C Y
B Y
C Y
A Z
B Z
C X
C X
B Y
B Y
B Z
B Y
B Z
A X
C X
C X
B Y
C X
A Z
C Y
B Y
A Z
C Z
B X
C Y
C X
C X
A Z
B Y
B Y
C Z
B Y
A Y
C Y
B Y
B X
B Z
C X
B Y
B X
C Z
B Y
B X
B Y
B Y
B Y
A Z
A Z
B Z
A Z
C Y
C Z
B X
C X
A Z
C X
B Y
B Y
A X
B X
B Y
B X
B X
A Y
A Z
C X
B Z
B Z
C Y
C Y
B Y
B Y
B Y
A Z
A Z
B Y
B Y
C Y
C Y
C Y
C Z
C X
C Y
B Y
B X
B Y
A Y
A X
C Y
B Y
A Z
B Y
B Y
C X
C X
B Y
B Y
C Y
A Z
B Y
C Y
C Z
C Z
C Y
A Y
B Y
B Y
C Y
B X
C Z
C Z
C Z
B Y
B Y
B Y
C Y
A Z
B Y
A Z
B Y
A Z
C X
C Z
C Y
B Y
A Z
B Y
B Y
C Z
B Y
C X
B Y
C Y
C Y
B Y
B Y
A X
C Z
B Y
C Y
C X
B Y
B Y
B Y
B Z
A Z
B Y
B Y
B Y
A Z
B Y
A X
B Y
B Y
B Y
C Y
C X
C Y
A Z
B Y
C Y
B Y
C Y
C Y
C Y
A X
C Z
B Y
B Y
C Z
B Y
B Y
C Z
B Z
B Y
C Y
B Y
B Y
B Y
B Y
B X
C X
C Y
B Y
A Z
B Y
A X
B Y
B Y
B Y
B Y
C Z
C Z
B Y
A Z
B Y
C X
C X
C Y
B X
A X
B X
B Y
C X
C Z
C Y
C Y
B Y
C Z
B Y
B Y
C Z
A X
B Y
C Z
B Z
B Y
C X
C X
B Y
B Y
B X
C Z
A Z
A X
B Y
C X
B Y
B Y
C Z
B Z
C Y
B Y
B X
C X
C Z
B Z
B Z
C Y
B Y
A X
B Y
B Y
C X
B X
A Z
B Y
A Z
B Y
B Y
A Z
C X
C X
B Y
B X
B Y
A Z
C Y
C Z
B Y
B Y
A X
B Y
C Y
C Y
B Y
A X
B Y
B Y
A Z
C X
C X
C Y
B Y
A X
B Y
B Y
C Y
B Y
B Y
B Y
B Z
B Y
C Y
C Y
B Y
C X
C X
B Y
C Y
B Y
C X
B Y
B Z
B Y
A Z
A Z
C X
A Z
A Z
B Y
B X
C Z
B Y
B Y
B Y
B Y
B Y
C X
C Y
B Y
A X
C X
C X
C Y
B Y
C X
C X
C Z
B Z
C Y
C X
B Y
B Y
C X
B X
C Z
B Y
B Y
C Y
A Z
C Y
C X
C Y
B Y
B Y
C X
C Y
C Y
C X
B Z
B Z
B Y
B Y
C Y
B Y
C X
A Z
A X
C Z
B Y
C Y
C Y
B Y
B Y
C Y
B Y`,
}

export const day01: Data = {
  example: `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,
  custom: `8417
8501
5429
2112
6482
7971
9636
4003

4697
2941
3275
6060
4879
7158
5066
3196
5780
3143
2510
7073

3820
6710
4781
6241
3975
6308
5289
6575
2662
4804
5352
4610

18980
3731
16643

6500
2810
13252
5288
2110
12393

5354
5521
6015
2501
6067
2465
2201
3864
2661
4078
2399
3212
2831
3268
2726

4701
4530
1699
3015
3682
2537
4554
2826
1895
2652
4074

3650
2113
4750
6639
5177
3823
1529
5671
3679
7061

1984
3240
7139
1931
6740
5695
6572
3264
2904
7199

4982
3483
3358
2762
3983
1341
7420
5830
5709
6140
5363
2636

8943
9452
14560
11685
9792

51549

4032
3303
6291
2010
1099
4304
3308
3226
7038
5911

3627
4414
3217
3388
5294
1914
4938
1120
3825
4163
5549
1712
2589
1550

3683
5829
3937
6935
8588
2765
9142
6662

2440
1029
5550
4674
3176
1791
3867
2779
5259
4676
5868
2371
4557
1058

5431
7001
1789
7292
2550
6087
6538
3913
6977
2262
5710
2555

10586
1560
9521
6677
7222
7567
9516

2974
4438
5184
1797
3472
3685
4252
3512
6003
3274
6482
5545
6207
3442

2542
2128
3556
3399
2355
2355
2887
5069
6026
2508
1716
1556
2295
3955

25725
15128
7375

14056
1829
18860

55324

6072
6692
4264
6261
1588
1143
7373
6603
5488
3320
2545
5954

18062
29180

3677
6522
4883
7097
5284
2549

48546

3552
4460
1059
2662
4123
4032
4430
3578
3441
3895
3487
1717
5564
2195
5687

3760
3157
2112
5937
5018
4986
1568
7508
2288
4252
4226

8943
35829

3615
4087
16628
9725

18133
3552
19658
8840

5401
2506
2988
4760
5149
2556
1375
2458
1349
6012
3101
1719
4705

1915
4351
4834
6064
1864
6366
1081
4066
4200
6982
1148
6685

6497
19940
5418
19755

6763
4697
4844
6105
7080
7110
3403
1635
2373
4737
1538
4517

55242

5390
4892
9004
6322
2309

14406
2408
3189
13705
15881

8001
4336
7789
3403
7771
5339
3603
2882
2789
5457

5291
1004
4796
5162
3295
5628
6048
8055
2805
2979
6347

4342
2131
3900
9516
9941
10085
9855
4946

3766
12591
6027
7521
2532
2965

6640
8130
2235
3616
1513
4982
5757
6450
7833
2535

11114
9350
5189
7416
2510
12480

2161
1329
6055
5304
1213
5987
1021
1484
2736
1594
3897
1298
3701
3500
5264

1393
8359
7732
1479
1367
9665
4956
8989
2423

14947
26722

4382
1257
4970
3681
4299
2421
3996
4978
3178
5039
3989
5297
1322
1941

2901
5088
5876
5770
4000
5408
5932
3787
4428
3649
3000
4528
3172
5852
4803

3841
6352
7104
3285
8693
7082
8890
10598

32634

5064
4469
2675
5662
1483
5918
3117
4976
3964
2474
5210
1632
4618
2106
3214

1940
5559
2138
6436
1860
5369
5147
2794
1714
3409
1892
5806
3899
2305

4500
2147
4251
4609
3619
2567
5201
3390
1319
4424
3005
1397
1693
4714

2415
4424
3809
3615
3269
1986
2018
4848
5122
1968
3075
2470
5922
1937
4125

6317
6637
4533
5743
4806
3129
1306
3957
4663
7623

14487

34032
11976

5839
5692
6716
1473
1572
6622
7735
2335
5670
6461
2705

5643
1721
3150
6460
5134
1124
3925
1463
1951
6910
6680
3038
2685

3205
2335
4418
2358
5683
2334
1910
4780
1315
1613
1523
2882

3266
12924
8477
7172
13876
9290

18737
7661
5950

61407

24968
23181

4341
5288
9306
10062
9350
4045

4607
2565
2507
4183
3101
5356
3384
4707
2040
5622
2513
2429
2496
1069

3590
5290
5371
6878
6657
8246
4479
4906
3830

7894
7018
5222
7556
7754
3433
4862
9010
6891

6337
21986
2791

1075
5278
3373
3820
1277
3217
1349
1758
2934
1298
5885
1544
4560
4384
4804

6345
1952
1082
5949
3946
5991
6474
6288
4526
5059
6081
1155
1388
5735

1166
6023
6465
2215
7056
7369
6983
1051
6578
6131
6334
6491

4486
5666
5937
5460
2587
1803
3938
1771
4157
5144
2624
4098
5403
2063
2746

6953
11646
2940
6280
4667
1413

5913
2811
1258
5507
6685
1464
3137
6716
4217
3656
6306
4198
4557

5846
2427
3635
6365
5987
5964
4458
4119
4522
3972
6216
5551
1705

2125
5680
1450
1701
5256
4673
5045
5515
1432
3565
3246
6050
5755
3390
5847

1655
5405
6132
3714
1627
7477
10344
6058

4914
4975
4158
2466
5685
2484
3594
1037
3369
1022
3917
3185
5233
5571
5222

6996
4804
1923
3688
4808
1448
2836
5346
5266
4603
2173
1082

5730
9574
5903
6668
5482
5088
8905
5333
7135

5377
2192
6250
1581
5354
3088
1125
2676
3780
3977
4634
3810
4168

3173
4961
1384
5868
4666
2902
7158
8275
5856
6056

7098
12466
4255
10181
13726
4866

1681
1910
5175
4773
7702
5183
5759
2788
2596
5676
5361

6560
5352
5182
13627
7612
10355

4780
1702
5111
1101
6959
4120
5441
4818
8091
6480

8332
5999
6744
9027
7948
3470
9144
6675
2996

6961
19157
1485
19127

22926

17211
14166
1463

5074
9836
4387
10138
10072
5791
3683
9806

5623
3668
4324
9990
4865
1793
10752

9739
18699
14526
4157

2785
1804
4527
4430
3373
10323
6855

2075
4828
2026
3909
6410
4035
3709
5177
3259
6033
5534
6097
2578

2246
6146
5899
1864
2881
4628
3176
5663
3088
3834
2935

16262
11795
14098
15140
13228

4323
8674
5497
8305
6261
7846
2593
10156

5309
3112
4563
1434
1107
7130
5727
4950
7466
6218
3641

6379
1200
2050
6235
4257
2532
3132
6179
4883
6282
6576

11097
12482
7593
3300
3342
2184

1950
2753
4277
8130
5451
7991
4993
7978
8004

20042
19430
5442

7059
6666
5832
6485
2405
2744
4710
1726
1121

2277
1842
1575
1955
1906
4176
4114
5040
5552
4857
2775
5033
3488
3971
3550

11844
9703
6549
7779
9117
1536

8861
25738

3649
10095
4132
1888
6453
7269
5898
9769

5465
8855
12706
6698
3456
4949

3093
8425
8580
8693
1401
6281
8069
7607
6368
7467

6885
1469
1315
2335
6669
3226
5261
2477
1931
6691
2575
1377
5029

5220
4639
5985
1669
1162
4269
6532
4630
4169
3164
6896
6432

12705
4248
5011
7544
2040
7767

60119

58181

69195

10643
5605
3433
3275
4741
2858
8151
10582

4299
10093
12455
2583
2604
11520

4609
8245
1989
17043

4998
8893
3978
4961
2847
8109
9266
1034
4808

6593
3208
3966
1649
5952
1961
4517
3911
4239
3255
4144

3721
2249
3195
1827
3942
2713
4481
2475
3566
2701
2832
2372
5281
3315
6029

5817
6495
8621
7101
3936
1675
3309
1873
8737
4558

6533
4655
4205
6051
2902
2566
2173
1535
5827
2807
6391
7194

5844
2233
4210
2293
2529
3081
1524
5844
5931
6456
6427
4873
3195

3101
3627
9503
1451
9148
1990
2748
5949

1357

4305
4183
8665
9225
5169
8711
7360
4352
8762

19297
6700
3922
13161

7177
5207
12649
10712
3766

3197
11717
4128
14139

5844
4035
9789
5874
6510
6863
9172
3398

3289
3003
7463
5109
6382
5082
2587
5094
7545
2487
2585

15763
18524
4143
8602

4828
2314
3592
3742
4802
3369
3590
5778
5439
4261
4063
3117
3004
2803
4503

3356
1306
6227
5953
1962
1596
1031
6259
1314
5303
4053
6606
6141

23367
13468

7561
3664
10113
11060
7173
6770

14496
3114
2958
10451
12975

2779
8809
7880
9646
5169
11946
10951

1808
8038
4003
2639
4307
2437
3374
6114
3179
2414
6346

3683
4271
5347
4651
4209
3216
4860
5151
3676
3964
5855
5537
2334
2847

3036
4491
2992
5222
1007
3398
4412
5978
4514
5111
2173
4115
3297
3917
4087

1120
9199
13194
8285
12725
2925

4647
8917
5082
2858
7782
3193
7282
2432
6432

8143
1337
7526
4612
3111
2914
2283
7143

13219
11724
11762
13753
11229
9784

2649
8191
6390
2745
7430
6038
7916
7448
2535

16115
13575
13440
12313
7022

3839
5604
3500
1413
4189
2483
4394
4244
5173
4677
2620
3916
2756
3345
5480

3136
4946
2793
3039
4646
6070
4631
1187
1349
5338
3411
2576
3330

1836
11177
12819
12092
11081
5211

3380
3522
6853
4943
3560
6687
2925
1849
7189
2430
4195
4027

17162
17251

12148
6285
8465
9842
2740
9321

5968
1099
5670
12712
4090
10669

5599
11408
2321
8643
7657
3127

5527
5415
3154
7523
7113
7944
1210
4328
2435
7446

9572
2600
4927
7038
2863
8806
6209
5458
6332

14202
11728
4854

2445
4571
5676
4766
6356
3013
7160
4432
4641
5337
2949
7099

5446
5189
2921
4698
4187
2921
3446
4539
3540
5492
2071
1449
1923
4901
5579

13333
5770
5180
9001
7376
8291

3865
4909
3073
1720
1261
5913
1136
2052
5530
5411
1702
1550
2913
5178
2584

10717
2353
1830
5310
8508
10132
10255

9848
11390
1490
8553
4819
2115

2023
1214
1606
9515
5918
1391

32192
31035

6595
5614
7624
8271
4408
5528
1851
1879
7449
6260

6197
7995
9114

1713
5615
1103
6443
4641
4952
6313
1337
6825
3202
5031
4031
4673

17667
14248
18603
7973

4832
5010
1017
2983
1808
6429
5847
5974
2629
2190
5018
5594
3316
2445

8857
1902
6649
5100
2108
2331
7523
9370
2149

4877
2080
3225
1529
6630
3562
2262
2460
3366
5855
1527
2721
5946

32414
14299

6015
2017
6133
9382
3482
7670
1090
4911
4220

4475
5519
2909
1638
5199
3699
3179
1962
4396
1750
2375
5751
3907
2693
3037

2510
6869
3477
4511
1178
4193
6442
5839
3640
4681
4547
4390
4146

4965
3818
1807
1184
2238
5347
3971
5439
5111
6372
2632
2137
1616

5784
6903
3123
5558
6147
3532
4366
2303
6913
1180
6775
2658
5388

3315
4958
3185
2507
4022
3424
1123
3518
5329
5409
5895
4483
5391
3281
1485

5753
2212
6587
4668
1712
6688
1846
3009
3829
5361
6819
1247

3500
23879

3471
4339
3831
4004
5783
5540
5242
5588
4065
5878
1615
1441
4345
3932
3752

4206
5411
8355
5696
1314
1549
8447
10241

4882
4973
3042
7802
5574
4666
2738
7655
7766

2498
2714
2695
4724
4075
5588
6234
5988
5455
4229
4890
3590
1722
5413

1034
2896
4742
4024
5667
6076
5041
8378
3271
8737

1411
23272
6602

3363
12044
11777
7395
4856
2881
12001

2064
4239
2992
6806
6814
3037
3173
3336
5565

2053
2518
5120
4318
1240
3674
7302
1160
3537
4288
2983

5826
5926
7843
2996
6079
7832
2716
8027
1470
8005

10435
24340
11044

7277
4053
1588
2648
5715
3133
5720
6702
7375
2244
7196
2918

20699
12028

11053
11400
3604
7989
7666
7379
10696

5916
13989

6510
4784
2679
11144

5017
3999
6453
1013
3002
4568
6255
6327
5108
2654
1390
3828
5913
2765

1242
8316
3256
1006
6026
10319
3552
6538

2266
2011
7466
2302
5729
1468
1527
6297
7443
3490
6348

2767
5816
5452
2946
3461
1647
5520
5237
3193
6009
5393
5583
2746
4326
3446

2147
1913
3254
5992
7458
4791
7670
3815
2950
6429
1796

17982
7519

33743

2744
8866
15440
10433
15680

1710
3609
1849
4343
5780
4180
3584
2376
4885
4627
1885
3348
2099
1006
2550

22016
29227

22422
12606
11998

5357
2121
2744
4713
6531
5164
5774
3553
4974
2279
3932
2702

4518
3189
3337
1722
2096
5583
2532
1486
2548
2643
5666
6102
4889
5184

4730
6382
3208
6277
2724
5944
2098
5082
1984
5999

6747
7644
8933
2013
7112
3608
7377
5398
1166

9919
6479
7831
6544
5801
10986
10245

9314
10790
5728
3835
9597
7245

12744
1502
11126
8626
13645
8998

5883
2823
2589
5695
6506
2769
4070
4731
5193
2890
2243

5437
6241
1398
3651
7865
1854
4169
2921
5701
2839
2277

4279
4987
5933
1476
2572
1320
2304
1148
4617
4571
1202
3799
3033
2079
5217

4247
3918
7174
7333
2215
8351
1339
7229
5266

1357
3298
3348
6580
1364
6996
6527
3579
4631
1355
7165
4424

19948
18739
15360

2666
3271
1581
6748
3957
6221
1543
2058
5185
1264
2211
1826

9309
5622
9303
2516
12117
4126
2700

9949
16352
18404

3351
10708
10017
2594
4711
1749
9432

8877
7738
10940
6554
6358

4961
7610
1594
5133
5937
2581
5131
4044
9096

2157
6653
5601
1394
5724
6487
4100
3519
2273
5199
6924
6953
4903

26443
31228

2953
10062
5321
4145
2668
2525
4886
2965`,
}
