import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
const GoodsIcon = ({ commodity, w, h }) => {
  const drawSvg = (name) => {
    switch (name) {
      case 'Apple':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M849 1639c7-3 10-13 14-24 10-41 35-19 41 10 2 15 20 0 37-1 24 0 40 22 47-4 9-35 28-36 39-1 4 14 4 20 12 23 31 10 61-4 88-18 148-78 256-197 312-339 56-140 80-301 28-474-46-151-203-213-350-168-43 12-85 34-123 63-18 10 47 26 22 36-42 17-95 15-129 0-30-14 34-26 13-37-27-19-55-34-84-45-153-59-320-10-382 150-51 132-46 300 16 456 57 142 159 280 310 361 25 13 52 28 89 12zm71-1284l94 1c-37 88-62 188-49 297 1 6 3 13 6 19 42-32 88-55 134-69 169-51 354 21 406 194 54 182 26 354-33 503-61 152-175 278-332 361-30 16-62 31-92 30-18-1-34-7-47-22-2 2-5 4-8 6-17 12-39 16-61 15-22-2-44-10-58-23-12 13-26 21-43 23-28 5-62-6-97-27-159-92-268-232-328-382-66-165-71-344-16-486 69-181 260-241 435-174 34 13 67 31 97 53-15-41-22-92-24-145-28 20-60 30-97 33-196 15-364-158-379-350 166-25 397 36 483 192 2-17 5-33 9-49zm-16 124c1-6 1-11 1-16-52-164-287-247-446-226 19 161 178 309 345 296 31-2 58-10 82-26-102-7-262-116-300-193 88 69 217 170 318 165zm-393 611c-68-123 13-328 148-356-83 59-163 187-148 356z"/>`;
      case 'Bread':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M458 1109c-61 67-98 133-110 192-9 41-5 79 12 110 16 31 46 56 88 74 64 26 154 35 274 19 135-18 269-47 397-87 129-41 253-91 368-151 110-57 178-123 208-187 18-39 22-78 13-113-9-36-31-69-65-97-62-51-161-85-292-89-53-2-104-1-153 2 70 51 136 141 153 208-64-71-161-185-221-203-74 8-144 22-210 40 94 58 204 199 211 267-39-61-196-228-268-249-8 3-16 6-23 9-65 23-125 53-181 88 81 44 186 167 196 223-70-76-182-179-237-197-58 41-112 88-160 141zm118-523c14-4 28 1 30 10 3 10-6 21-20 25s-28-1-30-11c-3-9 6-21 20-24zm332 74c19-4 36 3 38 14 3 12-11 24-31 28-19 3-36-4-38-15-2-12 12-24 31-27zm168-146c16-3 30 4 31 13 2 10-10 20-25 22-16 3-29-3-31-13-1-10 10-20 25-22zm-506 627c15-7 31-4 35 6s-5 23-21 29-32 3-36-6c-4-10 6-23 22-29zm373-125c17-7 34-2 39 11s-5 28-22 35c-17 6-35 1-40-12-4-12 5-28 23-34zm157-168c16-4 31 3 34 15 2 11-9 24-25 27-17 4-32-3-35-15-2-11 9-24 26-27zm365 49c20-6 38 1 43 16 4 14-9 30-28 36-19 5-38-2-42-16-4-15 8-31 27-36zM700 477c66 59 118 176 108 235-27-67-97-201-154-224-51 14-97 31-136 50-30 14-56 29-77 45-55 44-91 88-111 130-16 36-21 69-15 98s23 54 46 74c46 39 49 31 106 62 35 19-87 12-132-30-30-27-53-59-61-97s-2-81 18-125c22-47 62-97 123-145 24-18 52-35 85-50 134-64 344-106 546-97 171 8 338 52 453 149 28 24 98 93 107 143 11 63-31-12-72-55-27-28-54-49-68-61-76-62-178-100-288-119 57 59 90 145 85 212-30-76-87-185-146-221-24-3-48-4-72-6-39-1-77-1-115 1 76 72 126 190 120 261-34-82-86-202-174-258-61 6-121 15-176 28zm-394 816c14-66 54-139 121-212 109-120 242-209 398-267 154-57 330-83 527-76 141 4 249 42 317 98 42 34 69 75 80 120 11 44 6 92-16 141-34 72-107 145-226 206-118 62-244 113-375 154-131 40-267 70-405 89-127 17-225 7-295-22-52-22-88-54-109-94-22-40-27-86-17-137z"/>`;
      case 'Carrot':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M569 1319c-60 152-82 249-76 301 2 16 7 26 14 29 7 4 20 1 37-7 55-26 133-101 218-214l131-174c-43-30-103-48-142-95 60 21 120 34 163 66l270-358c50-79 74-147 70-205-3-55-31-102-84-140-11-7-21-12-31-16l-1-1c-64-28-118-26-162-1-55 31-99 95-137 180l-59 139c45 28 104 51 145 95-56-17-119-32-161-58l-195 459zm-121 306c-7-58 15-163 79-323 66-177 185-471 270-636 42-94 92-166 157-202 50-28 108-34 175-11 7-42 16-82 27-121 14-47 30-93 50-137 5-11 19-17 30-11 12 5 17 18 12 30-19 41-35 85-48 131l-4 16c7-16 15-31 23-46 29-53 43-58 59-98 15-39 24-51 43-45 15 5 17 45-35 118 20-20 41-37 64-51 11-6 25-2 31 8 7 11 3 25-8 32-36 21-67 53-95 92l-8 12c10-10 22-19 33-29 51-42 109-80 171-116 11-6 25-2 31 8 6 11 2 25-8 32-60 34-116 71-165 111-42 36-80 74-109 116 47 44 73 95 77 155 4 67-22 145-78 232l-424 564c-89 118-174 199-234 228-30 13-55 16-76 7-22-10-36-32-40-66z"/>`;
      case 'Dumplings':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M809 436c-27 50-90 90-162 135-105 66-232 145-281 282-17 47-26 90-26 130 0 53 16 100 49 140s84 73 153 98c98 36 232 54 402 55 247 0 421-31 518-102 91-67 112-174 59-328-34-97-151-178-255-249-87-60-166-114-191-173-7 6-15 18-23 28-8 11-16 21-23 28-16 15-31 11-45-4-8-8-15-19-22-31-6-9 9-34-2-27-1 1-8 14-16 27-9 15-18 32-28 42-15 18-32 23-50 7l-2-1c-6-7-13-14-21-23-12-12-25-26-34-34zm-658 620h151c-6-23-9-48-9-73 0-46 10-94 28-147 55-151 190-235 301-305 70-44 130-81 147-123 12-25 30-29 52-20 18 9 39 31 57 50l9 10c5-7 10-17 16-26 10-19 20-36 31-44 30-19 49 12 68 42l7 11 5-7c15-20 32-42 51-50 22-8 41-2 53 29 18 47 92 98 174 154 111 76 235 161 274 274 30 87 39 162 26 225h154c12 0 22 4 29 10 7 5 11 12 13 21 2 7 2 16-2 24v2c-5 10-13 20-27 29l-799 495c-8 4-17 4-25-1l-797-494c-14-9-23-20-26-31-3-8-4-16-2-24v-1c2-8 6-15 13-20 7-6 16-10 28-10zm169 48H166l782 484 782-484h-152c-18 42-47 78-88 108-106 77-289 111-546 111-176 0-315-20-418-57-77-28-135-66-174-113-13-16-23-32-32-49zm527-543c1-13 13-22 26-21 13 2 22 14 21 27-5 46-21 91-50 134-28 43-67 83-119 121-11 8-26 6-33-5-8-10-6-25 5-33 47-35 83-71 108-109 24-36 37-74 42-114zm172 17c-9-9-10-24-1-34 9-9 24-10 34-1 49 47 87 97 107 146 20 48 24 94 4 137-5 12-19 17-31 12s-17-20-12-31c13-30 10-64-4-100-18-42-53-87-97-129z"/>`;
      case 'Eggs':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M897 1201c2-107 18-201 50-284 32-85 80-159 143-226 31-32 61-58 92-79 53-35 107-52 160-48s105 28 155 76c26 24 52 55 77 93 58 87 97 183 111 286 14 97 7 201-26 311-40 134-138 220-251 257-60 19-125 25-187 16-63-9-123-32-174-70-90-66-152-177-150-332zM369 621c19-61 60-108 96-134-33 45-52 106-65 142s-30 123-29 171c-25-56-21-118-2-179zm761 189c31-45 75-73 112-85-39 29-70 73-89 99-20 26-56 92-67 132-6-52 13-102 44-146zM989 932c-30 80-46 168-48 269-2 139 53 238 132 296 45 34 98 54 154 62 55 8 113 3 167-15 100-32 187-108 222-227 31-103 38-201 25-292-13-96-50-186-105-268-23-34-46-63-69-85-43-40-85-61-128-64s-87 11-132 42c-28 18-56 42-84 72-60 62-104 132-134 210zm47-256c6 11 2 24-9 30-11 5-24 1-30-10-55-105-145-210-245-279-62-43-127-73-189-80-60-7-118 8-167 52-37 33-69 83-95 154-46 128-63 292-41 443 15 107 49 207 106 283 55 74 131 125 232 136 73 8 159-4 258-43 12-5 25 1 29 12 5 12-1 25-12 29-107 42-200 55-279 46-115-12-202-70-264-154-61-82-98-189-114-303-23-158-5-329 43-464 29-78 65-134 108-172 59-54 128-71 200-63 70 8 143 40 211 87 105 74 200 185 258 296z"/>`;
      case 'Fish':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M330 1221c62 42 116 91 164 145 44 51 83 106 116 165 0-21 0-42 1-62 2-51 6-99 13-144l2-20 20 1c331 15 559-60 708-204 132-126 207-333 238-519 16-93 43-160-85-67-73 53-32 25-104 74 61-77 28-32 94-103 29-32 47-63 44-88-2-28-20-35-42-37-225 89-407 207-557 346-152 143-262 319-356 497v1l-19 3c-50 6-102 10-156 11-26 1-53 1-81 1zm1074-776c15 0 26 11 26 26 0 14-11 26-26 26-14 0-26-12-26-26 0-15 12-26 26-26zm14-83c-242 4-441 70-584 194-37 33-70 69-99 109l-5 11h-3c-35 51-64 107-86 169l-3 12c0 4-2 7-4 9-27 81-42 172-47 272 89-163 195-321 335-452 136-127 299-237 496-324zm-251 236c19 47 70 127 118 177 49 51 97 87 155 118-63-15-149-71-179-106s-91-128-94-189zm-706 797c-61-70-134-130-221-179l-79-44 91 3c53 2 106 3 158 2 45-1 90-4 133-9 0-11 0-22 1-32 5-112 23-213 55-303 14-71-5-119-18-153-3-8-5-14-7-19l-6-18 18-8c36-17 66-12 96-7 7 1 14 3 21 3 26-54 68-113 108-168 55-78 106-150 101-186l-5-28 28 3c42 4 70 24 101 45 33 22 70 48 131 50 87-19 181-29 282-28 20 0 40 0 59 1h3l1 1c18 3 33 13 43 26 11 15 17 33 18 50 2 18-2 34-10 50 11-5 22-7 32-7 18-1 31 6 39 22 3 7 4 16 4 25v1c-11 150-39 286-89 403 24 85 34 146 20 179-18 40-58 43-130 4-17 21-35 41-55 60-155 148-387 228-720 216-5 39-8 79-9 121-2 49-2 100 0 152l3 108-45-98c-40-88-90-168-152-238zm1059-443c-16 30-34 59-54 87 39 21 58 24 63 13 7-16 3-51-9-100zM842 494c69-53 148-93 236-122-26-11-47-26-67-39-19-14-37-26-58-33-10 51-57 117-107 188l-4 6zM643 732c11-21 22-41 35-60l-4-1c-17-3-34-6-51-3 7 18 15 39 20 64zm494-44c-63 35-132 85-169 126-56 61-38 120 55 75 59-28 125-98 166-130-27 71-122 145-149 158-140 67-187-33-89-129 21-21 98-87 186-100z"/>`;
      case 'Garlic':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M1032 241L853 348l-20 164c-11 83-96 161-190 248-123 114-263 243-250 402 8 94 70 188 159 258 88 70 202 115 314 112 51-1 103 0 154 0h2c116 1 236-48 328-120 91-71 154-165 156-256 4-162-131-288-255-403-109-102-210-196-211-308l-8-204zm-212 73l221-132 33-18 2 37 9 243c1 92 96 180 198 275 130 122 273 255 269 438-3 105-73 212-174 291-99 78-230 131-356 130h-1c139 137 65 129-65 0 0 207-45 209-45 2-130 130-201 137-63-2-116-2-233-50-325-122-98-78-167-183-176-290-15-181 134-318 265-439 88-81 167-154 175-221l22-175c1-7 4-13 11-17zm-27 484c-62 71-147 221-150 315-4 101-5 145 83 284-111-105-126-191-118-285 11-131 83-232 185-314zm136 113c2-62 11-169 17-231 5 62 14 169 15 231 5 159 6 166 2 325-1 41-11 188-17 229-5-41-14-188-15-229-4-159-5-166-2-325zm167-113c62 71 147 221 150 315 4 101 5 145-83 284 111-105 126-191 118-285-11-131-83-232-185-314z"/>`;
      case 'Honey':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M721 1019l49-49c14-15 33-23 52-25 19-1 38 5 52 19l56 55c14 14 20 33 18 53-1 18-9 37-24 52l-49 49 31 31c15 15 24 36 24 56 1 21-6 41-22 56-10 11-23 17-36 20 7 12 10 25 10 38 0 20-8 40-23 55-10 10-23 17-36 20 6 12 8 24 8 37-1 19-9 38-24 53l-6 6c-14 11-31 17-47 18-13 0-25-2-37-8-3 13-10 26-20 36-15 15-35 23-55 23s-40-8-55-23l-6-6c-4 11-10 21-19 30-14 14-33 22-52 22-19 1-38-6-52-20l-182-181c-14-14-20-33-20-52 1-19 9-38 23-52 9-9 19-15 30-19l-6-6c-16-15-23-35-23-55s7-40 23-55c10-11 22-18 36-21-6-11-9-24-8-36 0-17 6-33 17-47v-1l6-6c15-15 35-23 54-23 12-1 25 2 36 8 3-14 10-26 21-36 15-16 35-23 55-23 13 0 26 3 37 10 3-14 10-26 20-37 16-15 36-22 57-22 20 1 40 9 56 25l31 31zm78-20l-49 49 96 96 49-49c7-8 12-17 12-26 1-8-1-15-7-21l-55-55c-5-5-12-7-20-7-9 1-19 5-26 13zm-193 15c-7 7-10 17-10 26 1 10 5 20 13 28l216 217c8 8 18 12 28 12 10 1 19-3 26-10s11-16 10-26c0-10-4-20-12-28l-216-216c-8-8-18-12-28-13-10 0-20 3-27 10zm190 300l-250-250c-8-7-17-11-26-11-10 0-19 3-26 11-8 7-11 16-11 26 0 9 3 18 11 26l285 285c7 7 16 10 25 10s19-4 26-11 11-17 11-26-4-19-11-26l-34-34zm-464 36c-8 0-17 4-24 11s-10 15-11 24c0 8 3 16 9 22l181 181c6 6 14 9 22 8 8 0 17-4 24-11 7-6 10-15 11-24 0-8-3-15-8-21l-182-182c-6-6-14-8-22-8zm50-22c79 78 156 156 234 234 7 7 17 11 26 11s19-4 26-11 11-17 11-26-3-18-10-24l-286-287c-7-7-16-10-25-10-10 0-19 3-26 11-8 7-11 16-11 26 0 9 3 18 11 26l50 50zm30-132c106 105 211 211 317 317 6 6 15 9 23 9 10 0 19-4 26-12h1c7-7 11-17 11-26 0-8-3-17-9-23l-349-349c-6-6-14-9-23-8-9 0-18 4-25 11h-1c-7 8-11 17-11 26-1 9 2 17 8 23l32 32zm526-278c-8 8-21 8-29 0s-8-22 0-30l563-562c12-13 28-19 44-19s33 6 45 19l15 15c13 13 19 29 19 45s-6 32-18 44l-563 563c-8 8-21 8-29 0s-8-21 0-29l562-563c5-4 7-10 7-15 0-6-2-11-7-16l-15-15c-4-4-10-7-16-7-5 0-11 3-15 7L938 918z"/>`;
      case 'Ice cream':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" fill="currentColor" d="M679 981l7 148c0 8 3 15 9 20 7 6 18 10 34 12h430c16-2 27-6 34-12 5-5 8-12 8-20l8-148H679zm-40 149l-8-159c-57-39-83-81-83-123 0-40 23-78 65-115-9-13-15-25-20-37-9-23-12-45-9-65 4-21 14-40 31-55 9-8 20-15 33-20 54-21 92-48 114-77 17-21 25-42 25-63 1-20-6-39-19-57-16-21-41-39-75-52l-28-11 16-24c39-59 86-93 134-109 52-17 105-14 154 3 48 16 93 46 127 82 41 42 69 93 75 143 36 32 65 66 83 104 19 39 25 82 17 133 57 55 82 110 78 167-3 58-36 114-92 173l-9 162c0 23-8 41-24 54-11 10-26 17-44 21l-83 481c-1 18-9 33-21 44s-28 17-47 16H859c-19 1-35-5-47-16s-20-26-22-44l-83-481c-17-4-32-11-43-21-16-13-24-31-25-54zm117 78c23 136 72 344 81 473 1 6 3 11 6 14 4 3 9 5 15 4 30-3 142-3 172 0 6 1 11-1 14-4 4-3 6-8 7-14 10-133 57-334 81-473H756zm-95-274h563c48-50 76-97 78-141 3-42-16-84-60-127-34 24-69 46-105 66-42 24-86 45-132 62-12 5-26-2-31-14-4-12 2-26 14-30 45-17 86-37 126-59 38-21 75-45 110-70 7-41 2-75-13-106-13-28-34-54-60-79-15 16-31 30-48 42-22 16-47 29-72 43-12 6-26 1-32-10-6-12-1-26 10-32 24-12 46-25 67-40 18-12 34-26 48-44-5-39-28-80-61-114-30-31-68-56-109-70-40-14-83-17-124-3-32 10-64 32-93 67 29 16 52 34 68 55 20 27 30 57 30 88-1 30-13 61-36 90-27 35-72 67-134 92-7 3-14 7-19 11-8 8-13 17-15 28-2 12 0 25 6 39 4 11 10 22 18 32 46-8 90-24 131-48 46-26 89-61 129-105 9-10 24-11 33-2 10 9 11 24 2 33-43 49-90 87-140 115-49 28-100 46-154 55-39 32-61 62-61 90 0 27 21 56 66 86z"/>`;
      case 'Jam':
        return `
        <circle class="circle" cx="949" cy="949" r="949" fill="#fff"></circle>
        <path class="icon" d="M1184 1632H714c-68 0-130-27-174-72-45-45-73-106-73-174V786c-11-9-19 17-29 16-17 0-27-12-26-41 1-91 34-153 77-195 55-55 127-77 172-85v-23h-10c-21 0-40-9-54-22v-1c-14-13-23-33-23-54v-38c0-21 9-41 23-55s33-22 54-22h595c21 0 41 8 54 22 14 14 23 33 23 55v38c0 21-9 41-23 55-14 13-33 22-54 22h-4v24c46 9 115 31 169 85 43 43 75 107 75 198 2 46-14 63-39 64-5 0-11-1-16-3v560c0 68-28 129-73 174-44 45-106 72-174 72zM819 824c-21 28-39 61-103 61-60 0-109 20-109 96v321c0 76 49 96 109 96 111 0 85 99 170 99h128c85 0 59-99 170-99 60 0 109-20 109-96V981c0-76-49-96-109-96-97 0-89-76-143-95-8 9-18 16-30 20-29 10-47-9-65-28-10-10-21-4-28-4-9 1-17-4-27 8-14 19-29 38-56 39-5 1-11 0-16-1zm382-326v-79h45c10 0 20-4 27-11 6-7 11-17 11-27v-38c0-11-5-20-11-27-7-7-17-11-27-11H651c-10 0-19 4-26 11s-11 16-11 27v38c0 10 4 20 11 27 6 7 16 11 26 11h48v96h-1c-17 0-114 11-181 78-34 34-61 82-66 151l4-5c25-29 56-66 90-60 35 6 54 35 74 63 14 21 28 43 47 48 5 1 14-9 24-20 15-18 31-35 56-36 25 0 41 16 57 32 11 10 21 21 30 20 9 0 18-12 28-24 15-19 30-37 55-39 25-3 42 15 58 32 10 10 19 20 23 18 19-7 33-31 46-54 21-35 41-69 82-71 40-2 57 32 75 66 11 22 23 44 38 49 4 1 12-10 21-21 15-18 30-38 56-37 18 0 41 20 67 41 25 21 52 44 64 43 1 0 2-6 1-23 0-80-28-134-64-171-67-68-163-79-182-80v-17zm-63-40H908v-39h230v39zm-292 0h-84v-39h84v39z"/>`;
      default:
        return `
        <circle cx="949" cy="948" r="949" fill="#fff"></circle>
        <path d="M1269 948l-642 367 214-367-214-367 642 367zm-49 0L695 648l175 300h350z"/>
        `;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1898 1898"
      width={w}
      height={h}
      fill="currentColor"
    >
      {ReactHtmlParser(drawSvg(commodity))}
    </svg>
  );
};

GoodsIcon.propTypes = {
  commodity: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};

export default GoodsIcon;