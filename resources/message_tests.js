let message_csv = 
`testbed_id,test_id,startpoint,endpoint,option_1,option_2
1,1,B,R1a,L0,R0
2,2,B,L1a,L0,R0
3,3,B,L1b,L0,R0
4,4,B,L2a,L0,R0
5,5,B,R1b,L0,R0
6,6,B,L2b,L0,R0
7,7,B,L2c,L0,R0
8,8,B,L3a,L0,R0
9,9,B,R2a,L0,R0
10,10,B,R2b,L0,R0
11,11,B,R3b,L0,R0
12,12,B,L3b,L0,R0
13,13,B,R3a,L0,R0
14,14,B,R4a,L0,R0
15,15,B,R3c,L0,R0
16,16,B,L4a,L0,R0
17,17,B,R4b,L0,R0
18,18,L0,R0,B,L1a
18,19,L0,R0,B,L1b
18,20,L0,R0,L1a,L1b
19,21,L0,R1a,B,L1a
19,22,L0,R1a,B,L1b
19,23,L0,R1a,L1a,L1b
20,24,L0,L2a,B,L1a
20,25,L0,L2a,B,L1b
20,26,L0,L2a,L1a,L1b
21,27,L0,R1b,B,L1a
21,28,L0,R1b,B,L1b
21,29,L0,R1b,L1a,L1b
22,30,L0,L2b,B,L1a
22,31,L0,L2b,B,L1b
22,32,L0,L2b,L1a,L1b
23,33,L0,L2c,B,L1a
23,34,L0,L2c,B,L1b
23,35,L0,L2c,L1a,L1b
24,36,L0,L3a,B,L1a
24,37,L0,L3a,B,L1b
24,38,L0,L3a,L1a,L1b
25,39,L0,R2a,B,L1a
25,40,L0,R2a,B,L1b
25,41,L0,R2a,L1a,L1b
26,42,L0,R2b,B,L1a
26,43,L0,R2b,B,L1b
26,44,L0,R2b,L1a,L1b
27,45,L0,R3b,B,L1a
27,46,L0,R3b,B,L1b
27,47,L0,R3b,L1a,L1b
28,48,L0,L3b,B,L1a
28,49,L0,L3b,B,L1b
28,50,L0,L3b,L1a,L1b
29,51,L0,R3a,B,L1a
29,52,L0,R3a,B,L1b
29,53,L0,R3a,L1a,L1b
30,54,L0,R4a,B,L1a
30,55,L0,R4a,B,L1b
30,56,L0,R4a,L1a,L1b
31,57,L0,R3c,B,L1a
31,58,L0,R3c,B,L1b
31,59,L0,R3c,L1a,L1b
32,60,L0,L4a,B,L1a
32,61,L0,L4a,B,L1b
32,62,L0,L4a,L1a,L1b
33,63,L0,R4b,B,L1a
33,64,L0,R4b,B,L1b
33,65,L0,R4b,L1a,L1b
34,66,R0,L1a,B,R1a
34,67,R0,L1a,B,R1b
34,68,R0,L1a,R1a,R1b
35,69,R0,L1b,B,R1a
35,70,R0,L1b,B,R1b
35,71,R0,L1b,R1a,R1b
36,72,R0,L2a,B,R1a
36,73,R0,L2a,B,R1b
36,74,R0,L2a,R1a,R1b
37,75,R0,L2b,B,R1a
37,76,R0,L2b,B,R1b
37,77,R0,L2b,R1a,R1b
38,78,R0,L2c,B,R1a
38,79,R0,L2c,B,R1b
38,80,R0,L2c,R1a,R1b
39,81,R0,L3a,B,R1a
39,82,R0,L3a,B,R1b
39,83,R0,L3a,R1a,R1b
40,84,R0,R2a,B,R1a
40,85,R0,R2a,B,R1b
40,86,R0,R2a,R1a,R1b
41,87,R0,R2b,B,R1a
41,88,R0,R2b,B,R1b
41,89,R0,R2b,R1a,R1b
42,90,R0,R3b,B,R1a
42,91,R0,R3b,B,R1b
42,92,R0,R3b,R1a,R1b
43,93,R0,L3b,B,R1a
43,94,R0,L3b,B,R1b
43,95,R0,L3b,R1a,R1b
44,96,R0,R3a,B,R1a
44,97,R0,R3a,B,R1b
44,98,R0,R3a,R1a,R1b
45,99,R0,R4a,B,R1a
45,100,R0,R4a,B,R1b
45,101,R0,R4a,R1a,R1b
46,102,R0,R3c,B,R1a
46,103,R0,R3c,B,R1b
46,104,R0,R3c,R1a,R1b
47,105,R0,L4a,B,R1a
47,106,R0,L4a,B,R1b
47,107,R0,L4a,R1a,R1b
48,108,R0,R4b,B,R1a
48,109,R0,R4b,B,R1b
48,110,R0,R4b,R1a,R1b
49,111,R1a,L1a,R0,R1b
49,112,R1a,L1a,R0,R2a
49,113,R1a,L1a,R1b,R2a
50,114,R1a,L1b,R0,R1b
50,115,R1a,L1b,R0,R2a
50,116,R1a,L1b,R1b,R2a
51,117,R1a,L2a,R0,R1b
51,118,R1a,L2a,R0,R2a
51,119,R1a,L2a,R1b,R2a
52,120,R1a,L2b,R0,R1b
52,121,R1a,L2b,R0,R2a
52,122,R1a,L2b,R1b,R2a
53,123,R1a,L2c,R0,R1b
53,124,R1a,L2c,R0,R2a
53,125,R1a,L2c,R1b,R2a
54,126,R1a,L3a,R0,R1b
54,127,R1a,L3a,R0,R2a
54,128,R1a,L3a,R1b,R2a
55,129,R1a,R2b,R0,R1b
55,130,R1a,R2b,R0,R2a
55,131,R1a,R2b,R1b,R2a
56,132,R1a,R3b,R0,R1b
56,133,R1a,R3b,R0,R2a
56,134,R1a,R3b,R1b,R2a
57,135,R1a,L3b,R0,R1b
57,136,R1a,L3b,R0,R2a
57,137,R1a,L3b,R1b,R2a
58,138,R1a,R3a,R0,R1b
58,139,R1a,R3a,R0,R2a
58,140,R1a,R3a,R1b,R2a
59,141,R1a,R4a,R0,R1b
59,142,R1a,R4a,R0,R2a
59,143,R1a,R4a,R1b,R2a
60,144,R1a,R3c,R0,R1b
60,145,R1a,R3c,R0,R2a
60,146,R1a,R3c,R1b,R2a
61,147,R1a,R4b,R0,R1b
61,148,R1a,R4b,R0,R2a
61,149,R1a,R4b,R1b,R2a
62,150,L1a,L1b,L0,L2a
62,151,L1a,L1b,L0,L2b
62,152,L1a,L1b,L2a,L2b
63,153,L1a,R1b,L0,L2a
63,154,L1a,R1b,L0,L2b
63,155,L1a,R1b,L2a,L2b
64,156,L1a,L2c,L0,L2a
64,157,L1a,L2c,L0,L2b
64,158,L1a,L2c,L2a,L2b
65,159,L1a,L3a,L0,L2a
65,160,L1a,L3a,L0,L2b
65,161,L1a,L3a,L2a,L2b
66,162,L1a,R2a,L0,L2a
66,163,L1a,R2a,L0,L2b
66,164,L1a,R2a,L2a,L2b
67,165,L1a,R2b,L0,L2a
67,166,L1a,R2b,L0,L2b
67,167,L1a,R2b,L2a,L2b
68,168,L1a,R3b,L0,L2a
68,169,L1a,R3b,L0,L2b
68,170,L1a,R3b,L2a,L2b
69,171,L1a,L3b,L0,L2a
69,172,L1a,L3b,L0,L2b
69,173,L1a,L3b,L2a,L2b
70,174,L1a,R3a,L0,L2a
70,175,L1a,R3a,L0,L2b
70,176,L1a,R3a,L2a,L2b
71,177,L1a,R3c,L0,L2a
71,178,L1a,R3c,L0,L2b
71,179,L1a,R3c,L2a,L2b
72,180,L1a,L4a,L0,L2a
72,181,L1a,L4a,L0,L2b
72,182,L1a,L4a,L2a,L2b
73,183,L1b,L2a,L0,L2b
73,184,L1b,L2a,L0,L2c
73,185,L1b,L2a,L2b,L2c
74,186,L1b,R1b,L0,L2b
74,187,L1b,R1b,L0,L2c
74,188,L1b,R1b,L2b,L2c
75,189,L1b,L3a,L0,L2b
75,190,L1b,L3a,L0,L2c
75,191,L1b,L3a,L2b,L2c
76,192,L1b,R2a,L0,L2b
76,193,L1b,R2a,L0,L2c
76,194,L1b,R2a,L2b,L2c
77,195,L1b,R2b,L0,L2b
77,196,L1b,R2b,L0,L2c
77,197,L1b,R2b,L2b,L2c
78,198,L1b,R3b,L0,L2b
78,199,L1b,R3b,L0,L2c
78,200,L1b,R3b,L2b,L2c
79,201,L1b,L3b,L0,L2b
79,202,L1b,L3b,L0,L2c
79,203,L1b,L3b,L2b,L2c
80,204,L1b,R3a,L0,L2b
80,205,L1b,R3a,L0,L2c
80,206,L1b,R3a,L2b,L2c
81,207,L1b,R3c,L0,L2b
81,208,L1b,R3c,L0,L2c
81,209,L1b,R3c,L2b,L2c
82,210,L1b,L4a,L0,L2b
82,211,L1b,L4a,L0,L2c
82,212,L1b,L4a,L2b,L2c
83,213,L2a,R1b,L1a,L2b
83,214,L2a,R1b,L1a,L3a
83,215,L2a,R1b,L2b,L3a
84,216,L2a,L2c,L1a,L2b
84,217,L2a,L2c,L1a,L3a
84,218,L2a,L2c,L2b,L3a
85,219,L2a,R2a,L1a,L2b
85,220,L2a,R2a,L1a,L3a
85,221,L2a,R2a,L2b,L3a
86,222,L2a,R2b,L1a,L2b
86,223,L2a,R2b,L1a,L3a
86,224,L2a,R2b,L2b,L3a
87,225,L2a,L3b,L1a,L2b
87,226,L2a,L3b,L1a,L3a
87,227,L2a,L3b,L2b,L3a
88,228,L2a,L4a,L1a,L2b
88,229,L2a,L4a,L1a,L3a
88,230,L2a,L4a,L2b,L3a
89,231,R1b,L2b,R0,R1a
89,232,R1b,L2b,R0,R2b
89,233,R1b,L2b,R1a,R2b
90,234,R1b,L2c,R0,R1a
90,235,R1b,L2c,R0,R2b
90,236,R1b,L2c,R1a,R2b
91,237,R1b,L3a,R0,R1a
91,238,R1b,L3a,R0,R2b
91,239,R1b,L3a,R1a,R2b
92,240,R1b,R2a,R0,R1a
92,241,R1b,R2a,R0,R2b
92,242,R1b,R2a,R1a,R2b
93,243,R1b,R3b,R0,R1a
93,244,R1b,R3b,R0,R2b
93,245,R1b,R3b,R1a,R2b
94,246,R1b,L3b,R0,R1a
94,247,R1b,L3b,R0,R2b
94,248,R1b,L3b,R1a,R2b
95,249,R1b,R3a,R0,R1a
95,250,R1b,R3a,R0,R2b
95,251,R1b,R3a,R1a,R2b
96,252,R1b,R4a,R0,R1a
96,253,R1b,R4a,R0,R2b
96,254,R1b,R4a,R1a,R2b
97,255,R1b,R3c,R0,R1a
97,256,R1b,R3c,R0,R2b
97,257,R1b,R3c,R1a,R2b
98,258,R1b,R4b,R0,R1a
98,259,R1b,R4b,R0,R2b
98,260,R1b,R4b,R1a,R2b
99,261,L2b,L2c,L1a,L1b
99,262,L2b,L2c,L1a,L2a
99,263,L2b,L2c,L1a,L3b
99,264,L2b,L2c,L1b,L2a
99,265,L2b,L2c,L1b,L3b
99,266,L2b,L2c,L2a,L3b
100,267,L2b,L3a,L1a,L1b
100,268,L2b,L3a,L1a,L2a
100,269,L2b,L3a,L1a,L3b
100,270,L2b,L3a,L1b,L2a
100,271,L2b,L3a,L1b,L3b
100,272,L2b,L3a,L2a,L3b
101,273,L2b,R2a,L1a,L1b
101,274,L2b,R2a,L1a,L2a
101,275,L2b,R2a,L1a,L3b
101,276,L2b,R2a,L1b,L2a
101,277,L2b,R2a,L1b,L3b
101,278,L2b,R2a,L2a,L3b
102,279,L2b,R2b,L1a,L1b
102,280,L2b,R2b,L1a,L2a
102,281,L2b,R2b,L1a,L3b
102,282,L2b,R2b,L1b,L2a
102,283,L2b,R2b,L1b,L3b
102,284,L2b,R2b,L2a,L3b
103,285,L2b,L4a,L1a,L1b
103,286,L2b,L4a,L1a,L2a
103,287,L2b,L4a,L1a,L3b
103,288,L2b,L4a,L1b,L2a
103,289,L2b,L4a,L1b,L3b
103,290,L2b,L4a,L2a,L3b
104,291,L2c,L3a,L1b,L3b
105,292,L2c,R2a,L1b,L3b
106,293,L2c,R2b,L1b,L3b
107,294,L2c,L4a,L1b,L3b
108,295,R2a,R2b,R1a,R3b
108,296,R2a,R2b,R1a,R3a
108,297,R2a,R2b,R3b,R3a
109,298,R2a,R4a,R1a,R3b
109,299,R2a,R4a,R1a,R3a
109,300,R2a,R4a,R3b,R3a
110,301,R2a,R3c,R1a,R3b
110,302,R2a,R3c,R1a,R3a
110,303,R2a,R3c,R3b,R3a
111,304,R2a,R4b,R1a,R3b
111,305,R2a,R4b,R1a,R3a
111,306,R2a,R4b,R3b,R3a
112,307,R2b,R3a,R1b,R3b
112,308,R2b,R3a,R1b,R3c
112,309,R2b,R3a,R3b,R3c
113,310,R2b,R4a,R1b,R3b
113,311,R2b,R4a,R1b,R3c
113,312,R2b,R4a,R3b,R3c
114,313,R2b,R4b,R1b,R3b
114,314,R2b,R4b,R1b,R3c
114,315,R2b,R4b,R3b,R3c
115,316,R3b,R3a,R2a,R2b
115,317,R3b,R3a,R2a,R4a
115,318,R3b,R3a,R2a,R3c
115,319,R3b,R3a,R2a,R4b
115,320,R3b,R3a,R2b,R4a
115,321,R3b,R3a,R2b,R3c
115,322,R3b,R3a,R2b,R4b
115,323,R3b,R3a,R4a,R3c
115,324,R3b,R3a,R4a,R4b
115,325,R3b,R3a,R3c,R4b
116,326,R3a,R3c,R2a,R4a
117,327,R3a,R4b,R2a,R4a
118,328,R4a,R3c,R3b,R3a
118,329,R4a,R3c,R3b,R4b
118,330,R4a,R3c,R3a,R4b
119,331,R3c,R4b,R2b,R3b`