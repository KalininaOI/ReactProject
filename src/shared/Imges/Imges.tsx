/* eslint-disable react/no-unknown-property */
import React from 'react';

interface IImg {
  imgName: string;
}

const Imges = ({ imgName }: IImg) => {
  switch (imgName) {
    case 'Logo':
      return (
        <svg
          width="103"
          height="20"
          viewBox="0 0 103 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5858 8.36396C10.8047 9.14501 10.8047 10.4113 11.5858 11.1924L15.4749 15.0815L11.1924 19.364C10.4113 20.145 9.14501 20.145 8.36396 19.364L0.585786 11.5858C-0.195262 10.8047 -0.195262 9.53841 0.585786 8.75736L8.36396 0.979186C9.14501 0.198137 10.4113 0.198137 11.1924 0.979186L15.0815 4.86827L11.5858 8.36396ZM15.0815 4.86827L19.364 0.585786C20.145 -0.195262 21.4113 -0.195262 22.1924 0.585786L29.9706 8.36396C30.7516 9.14501 30.7516 10.4113 29.9706 11.1924L22.1924 18.9706C21.4113 19.7516 20.145 19.7516 19.364 18.9706L15.4749 15.0815L18.9706 11.5858C19.7516 10.8047 19.7516 9.53841 18.9706 8.75736L15.0815 4.86827Z"
            fill="url(#paint0_linear_6838_182)"
          />
          <path
            d="M41.2764 16.16C40.1457 16.16 39.1217 15.9147 38.2044 15.424C37.2977 14.9227 36.5831 14.2347 36.0604 13.36C35.5484 12.4853 35.2924 11.4987 35.2924 10.4C35.2924 9.30133 35.5537 8.31467 36.0764 7.44C36.5991 6.56533 37.3137 5.88267 38.2204 5.392C39.1377 4.89067 40.1617 4.64 41.2924 4.64C42.2097 4.64 43.0471 4.8 43.8044 5.12C44.5617 5.44 45.2017 5.904 45.7244 6.512L44.3804 7.776C43.5697 6.90133 42.5724 6.464 41.3884 6.464C40.6204 6.464 39.9324 6.63467 39.3244 6.976C38.7164 7.30667 38.2417 7.77067 37.9004 8.368C37.5591 8.96533 37.3884 9.64267 37.3884 10.4C37.3884 11.1573 37.5591 11.8347 37.9004 12.432C38.2417 13.0293 38.7164 13.4987 39.3244 13.84C39.9324 14.1707 40.6204 14.336 41.3884 14.336C42.5724 14.336 43.5697 13.8933 44.3804 13.008L45.7244 14.288C45.2017 14.896 44.5564 15.36 43.7884 15.68C43.0311 16 42.1937 16.16 41.2764 16.16ZM55.6586 6.56H51.9466V16H49.8826V6.56H46.1866V4.8H55.6586V6.56ZM57.4685 4.8H59.5165V12.752L65.5325 4.8H67.4685V16H65.4205V8.064L59.4045 16H57.4685V4.8ZM74.7368 11.28H72.6568V16H70.6088V4.8H72.6568V9.488H74.8008L78.0168 4.8H80.2248L76.4008 10.224L80.3688 16H78.0168L74.7368 11.28ZM90.1806 14.256V16H81.7806V4.8H89.9566V6.544H83.8606V9.456H89.2686V11.168H83.8606V14.256H90.1806ZM97.1074 4.8C98.0781 4.8 98.9207 4.96 99.6354 5.28C100.361 5.6 100.915 6.05867 101.299 6.656C101.683 7.25333 101.875 7.96267 101.875 8.784C101.875 9.59467 101.683 10.304 101.299 10.912C100.915 11.5093 100.361 11.968 99.6354 12.288C98.9207 12.608 98.0781 12.768 97.1074 12.768H94.5794V16H92.4994V4.8H97.1074ZM97.0114 11.008C97.9181 11.008 98.6061 10.816 99.0754 10.432C99.5447 10.048 99.7794 9.49867 99.7794 8.784C99.7794 8.06933 99.5447 7.52 99.0754 7.136C98.6061 6.752 97.9181 6.56 97.0114 6.56H94.5794V11.008H97.0114Z"
            fill="#424242"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6838_182"
              x1="5.67172"
              y1="5.77832"
              x2="13.1717"
              y2="13.7783"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFAC28" />
              <stop offset="1" stop-color="#FFC328" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'ProfileLogo':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#2A2F37"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#2A2F37"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
    case 'ExitLogo':
      return (
        <svg
          width="71"
          height="24"
          viewBox="0 0 71 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.058 11.82H35.64C36.228 11.82 36.7367 11.736 37.166 11.568C37.6047 11.4 37.9453 11.1527 38.188 10.826C38.4307 10.4993 38.552 10.1073 38.552 9.65C38.552 9.09 38.4307 8.63267 38.188 8.278C37.9453 7.914 37.6047 7.64333 37.166 7.466C36.7367 7.28867 36.228 7.2 35.64 7.2H33.12V17H35.78C36.4147 17 36.9793 16.8973 37.474 16.692C37.978 16.4773 38.3747 16.16 38.664 15.74C38.9627 15.3107 39.112 14.774 39.112 14.13C39.112 13.682 39.028 13.2947 38.86 12.968C38.692 12.6413 38.454 12.3753 38.146 12.17C37.8473 11.9553 37.4973 11.7967 37.096 11.694C36.6947 11.5913 36.256 11.54 35.78 11.54H34.058V12.198H35.78C36.0973 12.198 36.3867 12.24 36.648 12.324C36.9093 12.3987 37.1333 12.5153 37.32 12.674C37.516 12.8327 37.6653 13.0287 37.768 13.262C37.8707 13.4953 37.922 13.7613 37.922 14.06C37.922 14.4613 37.8287 14.802 37.642 15.082C37.4647 15.362 37.2127 15.5767 36.886 15.726C36.5687 15.8753 36.2 15.95 35.78 15.95H34.31V8.25H35.64C36.1347 8.25 36.5453 8.38067 36.872 8.642C37.1987 8.894 37.362 9.25333 37.362 9.72C37.362 10.028 37.2873 10.2893 37.138 10.504C36.9887 10.7187 36.7833 10.882 36.522 10.994C36.2607 11.106 35.9667 11.162 35.64 11.162H34.058V11.82ZM46.6666 10.56V17H47.7866V10.56H46.6666ZM40.8566 10.56V17H41.9766V10.56H40.8566ZM41.5146 13.976H43.5166C43.9273 13.976 44.2353 14.0647 44.4406 14.242C44.646 14.4193 44.7486 14.6713 44.7486 14.998C44.7486 15.2127 44.702 15.3993 44.6086 15.558C44.5153 15.7073 44.3753 15.824 44.1886 15.908C44.0113 15.9827 43.7873 16.02 43.5166 16.02H41.5146V17H43.5166C43.9646 17 44.366 16.93 44.7206 16.79C45.0753 16.65 45.3553 16.4307 45.5606 16.132C45.766 15.8333 45.8686 15.4553 45.8686 14.998C45.8686 14.3073 45.64 13.8033 45.1826 13.486C44.7346 13.1593 44.1793 12.996 43.5166 12.996H41.5146V13.976ZM53.3101 10.56L51.7701 12.8L50.2301 10.56H48.9701L51.1681 13.682L48.8301 17H50.0901L51.7701 14.564L53.4501 17H54.7101L52.3721 13.682L54.5701 10.56H53.3101ZM54.9939 13.78C54.9939 14.424 55.1386 15.0027 55.4279 15.516C55.7266 16.02 56.1279 16.4167 56.6319 16.706C57.1359 16.9953 57.7006 17.14 58.3259 17.14C58.9606 17.14 59.5252 16.9953 60.0199 16.706C60.5239 16.4167 60.9206 16.02 61.2099 15.516C61.5086 15.0027 61.6579 14.424 61.6579 13.78C61.6579 13.1267 61.5086 12.548 61.2099 12.044C60.9206 11.54 60.5239 11.1433 60.0199 10.854C59.5252 10.5647 58.9606 10.42 58.3259 10.42C57.7006 10.42 57.1359 10.5647 56.6319 10.854C56.1279 11.1433 55.7266 11.54 55.4279 12.044C55.1386 12.548 54.9939 13.1267 54.9939 13.78ZM56.1279 13.78C56.1279 13.332 56.2212 12.9353 56.4079 12.59C56.6039 12.2353 56.8652 11.96 57.1919 11.764C57.5279 11.568 57.9059 11.47 58.3259 11.47C58.7459 11.47 59.1192 11.568 59.4459 11.764C59.7819 11.96 60.0432 12.2353 60.2299 12.59C60.4259 12.9353 60.5239 13.332 60.5239 13.78C60.5239 14.228 60.4259 14.6247 60.2299 14.97C60.0432 15.3153 59.7819 15.5907 59.4459 15.796C59.1192 15.992 58.7459 16.09 58.3259 16.09C57.9059 16.09 57.5279 15.992 57.1919 15.796C56.8652 15.5907 56.6039 15.3153 56.4079 14.97C56.2212 14.6247 56.1279 14.228 56.1279 13.78ZM65.9992 12.492L67.8892 16.58H69.1492L65.9992 10.07L62.8492 16.58H64.1092L65.9992 12.492ZM68.8692 17V18.26H69.9892V15.95H62.0092V18.26H63.1992V17H68.8692Z"
            fill="#2A2F37"
          />
          <path
            d="M15 12.8333V17.8333C15 18.2754 14.8244 18.6993 14.5118 19.0118C14.1993 19.3244 13.7754 19.5 13.3333 19.5H4.16667C3.72464 19.5 3.30072 19.3244 2.98816 19.0118C2.67559 18.6993 2.5 18.2754 2.5 17.8333V8.66667C2.5 8.22464 2.67559 7.80072 2.98816 7.48816C3.30072 7.17559 3.72464 7 4.16667 7H9.16667"
            stroke="#2A2F37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 4.5H17.5V9.5"
            stroke="#2A2F37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.33325 13.6667L17.4999 4.5"
            stroke="#2A2F37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'AdvLogo':
      return (
        <svg
          width="110"
          height="24"
          viewBox="0 0 110 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.82 12.1C33.82 11.3627 33.9787 10.7047 34.296 10.126C34.6227 9.54733 35.066 9.09 35.626 8.754C36.186 8.418 36.8207 8.25 37.53 8.25C38.2487 8.25 38.8833 8.418 39.434 8.754C39.994 9.09 40.4327 9.54733 40.75 10.126C41.0767 10.7047 41.24 11.3627 41.24 12.1C41.24 12.8373 41.0767 13.4953 40.75 14.074C40.4327 14.6527 39.994 15.11 39.434 15.446C38.8833 15.782 38.2487 15.95 37.53 15.95C36.8207 15.95 36.186 15.782 35.626 15.446C35.066 15.11 34.6227 14.6527 34.296 14.074C33.9787 13.4953 33.82 12.8373 33.82 12.1ZM32.56 12.1C32.56 12.8093 32.6813 13.472 32.924 14.088C33.176 14.704 33.526 15.2407 33.974 15.698C34.422 16.146 34.9493 16.5007 35.556 16.762C36.1627 17.014 36.8207 17.14 37.53 17.14C38.2487 17.14 38.9067 17.014 39.504 16.762C40.1107 16.5007 40.638 16.146 41.086 15.698C41.534 15.2407 41.8793 14.704 42.122 14.088C42.374 13.472 42.5 12.8093 42.5 12.1C42.5 11.3813 42.374 10.7187 42.122 10.112C41.8793 9.496 41.534 8.964 41.086 8.516C40.638 8.05867 40.1107 7.704 39.504 7.452C38.9067 7.19067 38.2487 7.06 37.53 7.06C36.8207 7.06 36.1627 7.19067 35.556 7.452C34.9493 7.704 34.422 8.05867 33.974 8.516C33.526 8.964 33.176 9.496 32.924 10.112C32.6813 10.7187 32.56 11.3813 32.56 12.1ZM46.8825 11.47C47.3025 11.47 47.6759 11.568 48.0025 11.764C48.3385 11.96 48.5999 12.2353 48.7865 12.59C48.9825 12.9353 49.0805 13.332 49.0805 13.78C49.0805 14.228 48.9825 14.6247 48.7865 14.97C48.5999 15.3153 48.3385 15.5907 48.0025 15.796C47.6759 15.992 47.3025 16.09 46.8825 16.09C46.4625 16.09 46.0845 15.992 45.7485 15.796C45.4219 15.5907 45.1605 15.3153 44.9645 14.97C44.7685 14.6247 44.6705 14.228 44.6705 13.78L43.5505 12.94C43.5505 13.864 43.6952 14.6387 43.9845 15.264C44.2832 15.8893 44.6845 16.3607 45.1885 16.678C45.6925 16.986 46.2572 17.14 46.8825 17.14C47.5172 17.14 48.0819 16.9953 48.5765 16.706C49.0805 16.4167 49.4772 16.02 49.7665 15.516C50.0652 15.0027 50.2145 14.424 50.2145 13.78C50.2145 13.1267 50.0652 12.548 49.7665 12.044C49.4772 11.54 49.0805 11.1433 48.5765 10.854C48.0819 10.5647 47.5172 10.42 46.8825 10.42V11.47ZM44.1665 13.78H44.6705C44.6705 13.4067 44.7359 13.08 44.8665 12.8C45.0065 12.5107 45.1839 12.268 45.3985 12.072C45.6225 11.876 45.8652 11.7267 46.1265 11.624C46.3879 11.5213 46.6399 11.47 46.8825 11.47V10.42C46.4812 10.42 46.1125 10.4993 45.7765 10.658C45.4499 10.8073 45.1652 11.0267 44.9225 11.316C44.6799 11.6053 44.4932 11.96 44.3625 12.38C44.2319 12.7907 44.1665 13.2573 44.1665 13.78ZM43.5505 12.94L44.5305 13.682V12.24C44.5305 11.7733 44.5912 11.3067 44.7125 10.84C44.8339 10.364 45.0532 9.93933 45.3705 9.566C45.6972 9.19267 46.1499 8.91267 46.7285 8.726C47.2419 8.558 47.6992 8.348 48.1005 8.096C48.5112 7.844 48.8425 7.55 49.0945 7.214C49.3465 6.86867 49.4959 6.49067 49.5425 6.08H48.4365C48.3712 6.416 48.1799 6.738 47.8625 7.046C47.5545 7.34467 47.0832 7.60133 46.4485 7.816C45.7019 8.068 45.1139 8.432 44.6845 8.908C44.2645 9.37467 43.9705 9.944 43.8025 10.616C43.6345 11.288 43.5505 12.0627 43.5505 12.94ZM53.7411 13.976H55.7431C56.1538 13.976 56.4618 14.0647 56.6671 14.242C56.8725 14.4193 56.9751 14.6713 56.9751 14.998C56.9751 15.2127 56.9285 15.3993 56.8351 15.558C56.7418 15.7073 56.6018 15.824 56.4151 15.908C56.2378 15.9827 56.0138 16.02 55.7431 16.02H53.7411V17H55.7431C56.1911 17 56.5925 16.93 56.9471 16.79C57.3018 16.65 57.5818 16.4307 57.7871 16.132C57.9925 15.8333 58.0951 15.4553 58.0951 14.998C58.0951 14.3073 57.8665 13.8033 57.4091 13.486C56.9611 13.1593 56.4058 12.996 55.7431 12.996H53.7411V13.976ZM53.0831 11.61V17H54.2031V10.56H50.7731V11.61H53.0831ZM60.7709 17L63.1509 13.64H61.9189L59.5389 17H60.7709ZM64.8589 17V10.56H63.7389V17H64.8589ZM64.2009 13.444H62.1989C61.9282 13.444 61.6995 13.4113 61.5129 13.346C61.3355 13.2713 61.2002 13.164 61.1069 13.024C61.0135 12.884 60.9669 12.7067 60.9669 12.492C60.9669 12.2773 61.0135 12.1 61.1069 11.96C61.2002 11.82 61.3355 11.7173 61.5129 11.652C61.6995 11.5773 61.9282 11.54 62.1989 11.54H64.2009V10.56H62.1989C61.7602 10.56 61.3589 10.6253 60.9949 10.756C60.6402 10.8867 60.3602 11.092 60.1549 11.372C59.9495 11.652 59.8469 12.0253 59.8469 12.492C59.8469 12.9493 59.9495 13.3227 60.1549 13.612C60.3602 13.892 60.6402 14.0973 60.9949 14.228C61.3589 14.3587 61.7602 14.424 62.1989 14.424H64.2009V13.444ZM67.2725 13.64V14.228H69.1345C69.3491 14.228 69.5311 14.2513 69.6805 14.298C69.8391 14.3353 69.9651 14.396 70.0585 14.48C70.1611 14.564 70.2358 14.6573 70.2825 14.76C70.3385 14.8627 70.3665 14.9793 70.3665 15.11C70.3665 15.362 70.2638 15.5767 70.0585 15.754C69.8625 15.9313 69.5545 16.02 69.1345 16.02H67.2725V17H69.4145C70.1518 17 70.6791 16.832 70.9965 16.496C71.3231 16.1507 71.4865 15.7353 71.4865 15.25C71.4865 14.83 71.3838 14.5033 71.1785 14.27C70.9731 14.0367 70.6931 13.8733 70.3385 13.78C69.9838 13.6867 69.5825 13.64 69.1345 13.64H67.2725ZM67.2725 13.92H68.9945C69.3958 13.92 69.7598 13.864 70.0865 13.752C70.4225 13.6307 70.6931 13.4533 70.8985 13.22C71.1038 12.9773 71.2065 12.674 71.2065 12.31C71.2065 11.89 71.1038 11.554 70.8985 11.302C70.6931 11.0407 70.4225 10.854 70.0865 10.742C69.7598 10.6207 69.3958 10.56 68.9945 10.56H67.2725V11.54H68.9945C69.3305 11.54 69.5965 11.6193 69.7925 11.778C69.9885 11.9273 70.0865 12.128 70.0865 12.38C70.0865 12.5013 70.0585 12.618 70.0025 12.73C69.9558 12.8327 69.8858 12.926 69.7925 13.01C69.6991 13.094 69.5825 13.1593 69.4425 13.206C69.3118 13.2433 69.1625 13.262 68.9945 13.262H67.2725V13.92ZM66.6145 10.56V17H67.7345V10.56H66.6145ZM78.6002 10.56H73.0702V14.76C73.0702 15.2173 72.9675 15.5347 72.7622 15.712C72.5662 15.8893 72.3282 15.978 72.0482 15.978V17C72.5335 17 72.9349 16.9207 73.2522 16.762C73.5695 16.594 73.8029 16.3467 73.9522 16.02C74.1109 15.684 74.1902 15.264 74.1902 14.76V11.61H77.4802V17H78.6002V10.56ZM80.9188 14.06H86.4208C86.4302 14.004 86.4348 13.948 86.4348 13.892C86.4348 13.836 86.4348 13.78 86.4348 13.724C86.4348 13.0427 86.3088 12.4593 86.0568 11.974C85.8048 11.4793 85.4502 11.0967 84.9928 10.826C84.5355 10.5553 84.0035 10.42 83.3968 10.42C82.8462 10.42 82.3468 10.532 81.8988 10.756C81.4602 10.98 81.1008 11.2927 80.8208 11.694C80.5408 12.0953 80.3542 12.562 80.2608 13.094C80.2422 13.206 80.2282 13.318 80.2188 13.43C80.2095 13.542 80.2048 13.6587 80.2048 13.78C80.2048 14.424 80.3355 15.0027 80.5968 15.516C80.8675 16.02 81.2315 16.4167 81.6888 16.706C82.1555 16.9953 82.6782 17.14 83.2568 17.14C83.8168 17.14 84.2835 17.0747 84.6568 16.944C85.0302 16.804 85.3475 16.6127 85.6088 16.37C85.8702 16.118 86.1082 15.8287 86.3228 15.502L85.4128 14.928C85.2728 15.1613 85.1048 15.3667 84.9088 15.544C84.7128 15.712 84.4888 15.8473 84.2368 15.95C83.9942 16.0433 83.7142 16.09 83.3968 16.09C82.9768 16.09 82.6128 16.0013 82.3048 15.824C81.9968 15.6467 81.7588 15.3853 81.5908 15.04C81.4228 14.6947 81.3388 14.2747 81.3388 13.78L81.3668 13.36C81.3668 12.9587 81.4555 12.6133 81.6328 12.324C81.8195 12.0253 82.0668 11.7967 82.3748 11.638C82.6828 11.4793 83.0235 11.4 83.3968 11.4C83.7702 11.4 84.0828 11.4747 84.3348 11.624C84.5962 11.764 84.7968 11.9647 84.9368 12.226C85.0862 12.478 85.1795 12.772 85.2168 13.108H80.9188V14.06ZM88.6279 14.13H93.3879V13.08H88.6279V14.13ZM92.6599 10.56V17H93.7799V10.56H92.6599ZM87.9699 10.56V17H89.0899V10.56H87.9699ZM101.276 11.68L101.346 10.07L96.0259 15.88L95.9559 17.49L101.276 11.68ZM97.0759 10.56H95.9559V17.49L97.0759 15.95V10.56ZM101.346 10.07L100.226 11.61V17H101.346V10.07ZM104.439 17L106.819 13.64H105.587L103.207 17H104.439ZM108.527 17V10.56H107.407V17H108.527ZM107.869 13.444H105.867C105.596 13.444 105.368 13.4113 105.181 13.346C105.004 13.2713 104.868 13.164 104.775 13.024C104.682 12.884 104.635 12.7067 104.635 12.492C104.635 12.2773 104.682 12.1 104.775 11.96C104.868 11.82 105.004 11.7173 105.181 11.652C105.368 11.5773 105.596 11.54 105.867 11.54H107.869V10.56H105.867C105.428 10.56 105.027 10.6253 104.663 10.756C104.308 10.8867 104.028 11.092 103.823 11.372C103.618 11.652 103.515 12.0253 103.515 12.492C103.515 12.9493 103.618 13.3227 103.823 13.612C104.028 13.892 104.308 14.0973 104.663 14.228C105.027 14.3587 105.428 14.424 105.867 14.424H107.869V13.444Z"
            fill="#4877F2"
          />
          <path
            d="M1.66675 4.5H6.66675C7.5508 4.5 8.39865 4.85119 9.02377 5.47631C9.64889 6.10143 10.0001 6.94928 10.0001 7.83333V19.5C10.0001 18.837 9.73669 18.2011 9.26785 17.7322C8.79901 17.2634 8.16312 17 7.50008 17H1.66675V4.5Z"
            stroke="#4877F2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3333 4.5H13.3333C12.4493 4.5 11.6014 4.85119 10.9763 5.47631C10.3512 6.10143 10 6.94928 10 7.83333V19.5C10 18.837 10.2634 18.2011 10.7322 17.7322C11.2011 17.2634 11.837 17 12.5 17H18.3333V4.5Z"
            stroke="#4877F2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'ALogo':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M0.621094 18V15.9492L1.83984 15.7734L7.26562 0.9375H10.7695L16.1602 15.7734L17.3789 15.9492V18H11.5664V15.9492L12.75 15.7383L12 13.3945H6L5.25 15.7383L6.43359 15.9492V18H0.621094ZM6.80859 10.875H11.1914L9.19922 5.02734L9.03516 4.51172H8.96484L8.78906 5.0625L6.80859 10.875Z"
            fill="#2A2F37"
          />
        </svg>
      );
    case 'ArrUp':
      return (
        <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 0L8 4H0L4 0Z" fill="#2C2D2E" />
        </svg>
      );
    case 'ArrDown':
      return (
        <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4L3.49691e-07 -2.22545e-07L8 4.76837e-07L4 4Z" fill="#2C2D2E" />
        </svg>
      );
    case 'DDBtn':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#2C2D2E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
              stroke="#2C2D2E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
              stroke="#2C2D2E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
    case 'BtnArrBack':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 7L7 1"
            stroke="#2C2D2E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'BtnArrForward':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L7 7L1 13"
            stroke="#2C2D2E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return <svg />;
      break;
  }
};

export default Imges;
