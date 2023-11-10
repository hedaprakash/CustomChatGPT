import React from 'react';

const SVGIcon = ({d}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
        >
            <path
                d={d}
            />
        </svg>
    )
}

export const ChevronIcon = () => {
    const d = "m 23.964348,61.960283 c 0.178034,-0.985655 0.804477,-2.560978 1.392076,-3.500724 C 25.944033,57.519812 38.756949,44.440295 53.829569,29.393948 82.56279,0.710833 83.35138,0.02498912 87.62674,1.6322199e-4 90.38335,-0.01584978 92.73299,1.1445241 96.31891,4.2927832 c 6.6806,5.8652538 8.66907,9.7562888 7.60109,14.8738778 -0.52777,2.528972 -0.93053,2.97101 -21.60035,23.706399 L 61.257085,64.002433 82.31965,85.131808 c 20.50521,20.570272 21.07644,21.195982 21.58738,23.645902 1.04126,4.99292 -0.53337,8.36499 -6.56168,14.05178 -3.90855,3.68713 -6.64848,5.16132 -9.60966,5.17034 C 83.2288,128.01353 82.4036,127.29618 53.155026,97.937125 37.986452,82.71126 25.246802,69.578592 24.844691,68.753422 23.895925,66.806469 23.558827,64.205326 23.964348,61.960283 Z";
    return (
        <SVGIcon d={d}/>
    )
}

export const ChatIcon = () => {
    const d = "m 63.984101,14.95522 c -21.979333,0.0059 -43.963845,0.198454 -45.228333,0.572059 -2.405021,0.710586 -6.032167,4.337732 -6.742754,6.742753 -0.742151,2.511841 -0.764492,59.93399 -0.02429,62.40458 0.719735,2.40226 3.227223,5.13618 5.816194,6.34174 1.996795,0.92981 2.824974,1.03108 8.453245,1.03508 l 6.239424,0.004 v 9.223228 c 0,9.60861 0.175067,10.66162 1.889295,11.3523 v 0.001 c 0.526091,0.21197 1.374727,0.3976 1.886194,0.4129 0.582574,0.0174 5.837407,-3.89752 14.067383,-10.48052 l 13.137722,-10.508418 22.27362,-0.01 c 21.461069,-0.009 22.346149,-0.0424 24.244559,-0.90175 2.64596,-1.19772 4.28032,-2.8062 5.52422,-5.43741 l 1.03457,-2.18902 V 53.525546 23.533006 l -1.03043,-2.213822 c -1.20557,-2.588971 -3.94,-5.096459 -6.34226,-5.816193 -1.24474,-0.372928 -23.219029,-0.553685 -45.198359,-0.547771 z m -45.364243,9.060445 c -0.04433,0.05535 -0.09091,0.11042 -0.133842,0.165882 v -0.03204 z m 90.811682,0.0072 0.12661,0.126607 v 0.04858 c -0.0413,-0.05876 -0.0839,-0.116978 -0.12661,-0.175183 z m -84.459604,2.177167 h 39.048335 39.047819 l 0.96738,0.967385 0.96687,0.966866 v 26.438229 26.43771 l -0.96687,0.96739 -0.96738,0.96738 h -20.857679 -20.8582 l -9.207204,7.34944 c -5.064018,4.04233 -9.428767,7.52234 -9.699685,7.73287 -0.389799,0.30291 -0.492478,-1.02895 -0.492478,-6.38256 0,-9.24643 0.593998,-8.69975 -9.457837,-8.69975 -7.461976,0 -7.53054,-0.008 -8.489938,-0.96738 l -0.967384,-0.96739 V 54.572512 28.134283 l 0.967384,-0.966866 z";
    return (
        <SVGIcon d={d}/>
    )
}

export const EditIcon = () => {
    const d = "m 32.611711,109.89433 c -7.72805,-1.73145 -13.23826,-6.7372 -15.35723,-13.9513 -0.53795,-1.83144 -0.61337,-5.62038 -0.60902,-30.595455 0.005,-26.919302 0.0456,-28.633615 0.73543,-30.814242 2.05198,-6.486605 6.76718,-11.050947 13.47264,-13.041579 1.80956,-0.537197 4.86819,-0.620543 22.77275,-0.620543 h 20.68244 l 1.17099,0.98532 c 2.10331,1.769821 1.96068,5.071757 -0.28495,6.596677 -0.94107,0.63905 -2.6164,0.707033 -21.80123,0.88467 -19.67575,0.182183 -20.86307,0.23271 -22.30845,0.949359 -1.95042,0.967055 -4.0615,3.07814 -5.02856,5.028555 -0.72888,1.47006 -0.76077,2.571555 -0.86045,29.724667 -0.10286,28.018591 -0.0983,28.210141 0.71488,30.100451 0.45551,1.05887 1.61919,2.651471 2.62441,3.591731 3.31894,3.104469 1.98646,2.990469 33.54995,2.870369 l 27.868828,-0.10604 1.58422,-0.84751 c 2.43438,-1.302329 3.73414,-2.555399 4.97593,-4.79717 l 1.13682,-2.05229 0.19242,-20.33271 0.19243,-20.332713 1.25683,-1.122591 c 1.738351,-1.552687 3.829931,-1.552625 5.568151,1.69e-4 l 1.25683,1.122761 0.10639,19.651369 c 0.11726,21.655005 0.0494,22.477225 -2.22871,26.990066 -1.49799,2.967489 -5.095721,6.566099 -8.061021,8.062979 -4.59301,2.31854 -4.44835,2.30913 -34.843928,2.2664 -15.24,-0.0214 -28.05546,-0.11656 -28.47879,-0.2114 z m 13.37588,-22.30758 c -1.38051,-0.68056 -2.66779,-2.49553 -3.02039,-4.25854 -0.16729,-0.83647 0.5691,-3.561385 2.71918,-10.061853 l 2.94861,-8.914716 20.60781,-22.606123 c 11.3343,-12.433369 21.756788,-23.782114 23.161098,-25.219434 3.44246,-3.523409 5.81955,-4.676288 9.668371,-4.689124 2.5257,-0.0084 3.24562,0.157878 5.51231,1.273335 3.04668,1.499291 5.21857,3.94561 6.24403,7.032997 0.96025,2.891032 0.63649,6.902067 -0.76495,9.476973 -1.06576,1.958159 -43.550369,48.912363 -46.096199,50.945745 -0.69233,0.55297 -4.74223,2.50127 -8.99977,4.32955 -8.21058,3.52579 -9.63711,3.84624 -11.9801,2.69119 z m 13.39117,-16.38439 c -1.53242,-1.435461 -2.90549,-2.609934 -3.05126,-2.609934 -0.22748,0 -3.12639,8.27714 -3.12639,8.926641 0,0.128055 2.01686,-0.65358 4.48193,-1.736971 l 4.48193,-1.969797 z M 85.799489,47.714394 c 9.90677,-10.847917 18.487841,-20.299614 19.069071,-21.003771 2.42948,-2.943305 0.23217,-7.117655 -3.38901,-6.438317 -1.47333,0.276399 -1.2668,0.06125 -24.369449,25.386652 l -15.06415,16.513506 2.79349,2.614476 c 1.53642,1.437963 2.82819,2.622684 2.87061,2.63271 0.0424,0.01001 8.18267,-8.857339 18.089438,-19.705256 z";
    return (
        <SVGIcon d={d}/>
    )
}

export const DeleteIcon = () => {
    const d = "m 40.131813,112.42875 c -4.67123,-1.62886 -8.4951,-5.19765 -10.70839,-9.99407 -0.94002,-2.03711 -0.9406,-2.05365 -1.05982,-30.11299 l -0.11928,-28.074759 1.24285,-1.242836 c 1.83133,-1.831339 4.23815,-1.758836 6.18326,0.186266 l 1.42909,1.429097 V 71.0939 97.56834 l 1.17033,2.24027 c 0.94742,1.81357 1.59702,2.46316 3.41059,3.41059 l 2.24026,1.17032 h 20.07955 20.07956 l 2.24026,-1.17032 c 1.81356,-0.94743 2.46317,-1.59702 3.41058,-3.41059 l 1.17033,-2.24027 V 71.0939 44.619458 l 1.42911,-1.429097 c 1.9451,-1.945102 4.35192,-2.017605 6.18325,-0.186266 l 1.24284,1.242836 -0.11928,28.074759 -0.11927,28.07476 -1.38886,2.83997 c -1.76515,3.60945 -4.74024,6.58795 -8.36163,8.37123 l -2.84005,1.39852 -22.28676,0.0986 c -20.72071,0.0917 -22.44288,0.0443 -24.50852,-0.67607 z M 53.281993,90.5418 c -0.46235,-0.18924 -1.21893,-0.76455 -1.68129,-1.27846 -0.81239,-0.90297 -0.84065,-1.52606 -0.84065,-18.53431 V 53.12911 l 1.09176,-1.091753 c 0.68105,-0.681064 1.74394,-1.17924 2.82544,-1.324296 1.56733,-0.210218 1.87601,-0.09023 3.21658,1.250333 l 1.48286,1.482866 v 17.31735 17.31735 l -1.4291,1.4291 c -1.45935,1.45935 -2.86266,1.76967 -4.6656,1.03174 z m 16.82469,-0.97798 -1.48287,-1.48286 V 70.76361 53.44626 l 1.48287,-1.482866 c 1.34057,-1.340568 1.64926,-1.460551 3.21658,-1.250333 1.08151,0.145056 2.14439,0.643232 2.82544,1.324296 l 1.09176,1.091753 v 17.6345 17.6345 l -1.09176,1.09176 c -0.68105,0.68105 -1.74393,1.17923 -2.82544,1.32429 -1.56732,0.21022 -1.87601,0.0902 -3.21658,-1.25034 z M 26.381273,36.743857 c -1.40532,-0.581061 -2.37104,-1.973448 -2.61134,-3.765039 -0.2052,-1.529849 -0.0781,-1.852313 1.25456,-3.185054 l 1.48287,-1.482871 h 9.70949 9.70947 V 23.67383 c 0,-5.053963 0.50915,-6.97806 2.15074,-8.127884 0.86016,-0.602476 2.78704,-0.685419 15.92319,-0.685419 13.13616,0 15.06304,0.08294 15.92319,0.685419 1.6416,1.149824 2.15075,3.073921 2.15075,8.127884 v 4.637063 h 9.70947 9.709487 l 1.48287,1.482871 c 1.34056,1.340564 1.46056,1.649248 1.25033,3.216563 -0.14505,1.081408 -0.64325,2.144456 -1.32419,2.82545 l -1.09165,1.091758 -37.294297,0.08195 c -20.51186,0.04507 -37.67259,-0.07446 -38.13494,-0.265633 z M 72.827063,25.999112 V 23.68733 h -8.82681 -8.8268 v 2.311782 2.311781 h 8.8268 8.82681 z";
    return (
        <SVGIcon d={d}/>
    )
}

export const YesIcon = () => {
    const d = "M 47.749997,114.46905 C 47.199999,114.23735 36.231253,103.50436 23.375,90.617979 3.1236272,70.319145 -1.2e-6,66.991176 -1.2e-6,65.713838 c 0,-1.251827 1.5678804,-3.042237 10.3882402,-11.862597 9.521605,-9.521604 10.532818,-10.388231 12.121315,-10.388231 1.597229,0 2.70359,0.969912 14.112794,12.372265 L 49.00205,68.20756 76.461058,40.751946 c 24.773152,-24.77008 27.614652,-27.455605 29.050182,-27.455605 1.40535,0 2.81132,1.224081 12.03996,10.482359 C 126.40077,32.656707 128,34.485931 128,35.730276 128,37.010231 123.02433,42.170071 89.375004,75.784901 68.131253,97.006874 50.299997,114.4873 49.75,114.63031 c -0.549997,0.143 -1.449998,0.0704 -2.000003,-0.16126 z"
    return (
        <SVGIcon d={d}/>
    )
}

export const NoIcon = () => {
    const d = "M 11.137363,116.86264 C 0.9312951,106.65659 5e-7,105.58124 5e-7,104.00273 c 0,-1.59962 1.3642967,-3.08854 19.1162665,-20.862638 L 38.232532,63.999998 19.116267,44.859915 C 1.3642972,27.085819 5e-7,25.59689 5e-7,23.997276 5e-7,22.418764 0.9312951,21.343428 11.137363,11.137363 21.343429,0.93129875 22.418762,7.5e-7 23.997272,7.5e-7 c 1.599618,0 3.088545,1.36429555 20.862643,19.11626525 L 64,38.232531 83.140082,19.116266 C 100.91419,1.3642963 102.40311,7.5e-7 104.00273,7.5e-7 c 1.5785,0 2.65385,0.931298 12.85991,11.13736225 C 127.0687,21.343428 128,22.418764 128,23.997276 c 0,1.599614 -1.36429,3.088544 -19.11626,20.862639 L 89.767471,63.999998 108.88374,83.140092 C 126.63571,100.91419 128,102.40311 128,104.00273 c 0,1.57851 -0.9313,2.65386 -11.13736,12.85991 C 106.65658,127.06872 105.58123,128 104.00273,128 c -1.59962,0 -3.08854,-1.36429 -20.862648,-19.11626 L 64,89.76747 44.859915,108.88374 C 27.085816,126.63571 25.59689,128 23.997272,128 c -1.57851,0 -2.653843,-0.93128 -12.859909,-11.13736 z"
    return (
        <SVGIcon d={d}/>
    )
}

export default SVGIcon;
