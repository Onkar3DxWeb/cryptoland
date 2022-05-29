import topbar from "topbar";

const DarkTopLoaderBar = () => {

    topbar.config({
        autoRun      : true,
        barThickness : 3,
        barColors    : {
            '0'      : 'yellow',
            '.25'    : 'yellow',
            '.50'    : 'yellow',
            '.75'    : 'yellow',
            '1.0'    : 'yellow'
        },
        //  shadowBlur   : 5,
        shadowColor  : 'green'
      })
};

export default DarkTopLoaderBar