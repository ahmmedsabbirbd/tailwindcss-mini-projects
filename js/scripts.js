(function ($) {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if (!isIE) {
        //IE specific code goes here
        "use strict";
    }


    /*** BrowserDetect */
    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "Other";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            var rv = dataString.indexOf("rv:");
            if (this.versionSearchString === "Trident" && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            { string: navigator.userAgent, subString: "Edge", identity: "MSEdge" },
            { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
            { string: navigator.userAgent, subString: "Trident", identity: "Explorer" },
            { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
            { string: navigator.userAgent, subString: "Opera", identity: "Opera" },
            { string: navigator.userAgent, subString: "OPR", identity: "Opera" },

            { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
            { string: navigator.userAgent, subString: "Safari", identity: "Safari" }
        ]
    };

    BrowserDetect.init();
    document.body.classList.add(BrowserDetect.browser);

    /*** Worked Article Show */
    fetch('https://ahmmedsabbirbd.github.io/Api.Me/sabbir.me/sabbir.me.json').then((data) => {

        return data.json();
    }).then((completedata) => {

        let data1 = "";
        completedata.map((value) => {
            data1 += `<article class="group duration-300 bg-white dark:bg-gray-800 p-[10px] md:p-[15px] rounded-tr-50 rounded-bl-35">
                        <div class="flex flex-wrap items-center -mx-[7.5px]">
                            <div class="xl:w-7/12 px-[7.5px]">
                                <div class="max-w-full max-h-full overflow-hidden rounded-tr-50 rounded-bl-35">
                                    <img class="w-full h-full object-cover duration-300 group-hover:scale-[1.3]"
                                        src="${value.image}" alt="${value.title}">
                                </div>
                            </div>
                            <div class="xl:w-5/12 px-[7.5px]">
                                <div class="xl:pt-0 pt-[10px]">
                                    <a href="${value.url}"><h1 class="h6 mb-[3px] xl:mb-[5px] font-bold duration-300 dark:text-black-text group-hover:text-red-600">
                                        ${value.title}</h1></a>
                                    <div class="text-p space-y-[2px] dark:text-black-text">
                                        <p>${value.description}</p>
                                        <p>${value.category}</p>
                                    </div>
                                    <span class="block mt-[2px] xl:mt-[3px] text-indigo-800">Published date : ${value.publish_date}</span>
                                    <a class="btn duration-300  hover:bg-red-600 bg-primary inline-block mt-[5px] font-bold"
                                        target="_blank" href="${value.url}">Live view</a>
                                </div>
                            </div>
                        </div>
                    </article>
                `;
        })
        document.getElementById('article').innerHTML = data1;

    }).catch((err) => {
        console.log(err);
    });

    /*** Worked Article Show */
    fetch('https://ahmmedsabbirbd.github.io/Api.Me/sum-up/sum-up.json').then((data) => {

        return data.json();
    }).then((completedata) => {

        let data1 = "";
        completedata.map((value) => {

        /*** All value dynamic */
        (value.title !== undefined) ? ( tdn = 'block' ) : (  tdn = 'none' );
        (value.description !== undefined) ? ( ddn = 'block' ) : (  ddn = 'none' );
        (value.category !== undefined) ? ( cdn = 'block' ) : (  cdn = 'none' );
        (value.time_to_time !== undefined) ? ( t2tdn = 'block' ) : (  t2tdn = 'none' );
        (value.image_1 !== undefined) ? ( i1dn = 'block' ) : (  i1dn = 'none' );
        (value.image_2 !== undefined) ? ( i2dn = 'block' ) : (  i2dn = 'none' );
        (value.publish_date !== undefined) ? ( pddn = 'block' ) : (  pddn = 'none' );
        (value.url !== undefined) ? ( udn = 'inline-block' ) : (  udn = 'none' );



            data1 += `<article class="group duration-300 bg-white dark:bg-gray-800 p-[10px] md:p-[15px] rounded-tr-50 rounded-bl-35">
                        <div class="flex flex-wrap items-center -mx-[7.5px]">
                            <div class="xl:w-12/12 px-[7.5px]">
                                <div class="xl:pt-0 pt-[10px]">
                                    <p class="text-p space-y-[2px] dark:text-black-text">Id : ${value.id}</p>
                                    <h1 class="h6 mb-[3px] xl:mb-[5px] font-bold duration-300 dark:text-black-text" style="display: ${tdn}">
                                        ${value.title}</h1>
                                    <div class="text-p mb-[5px] space-y-[10px] dark:text-black-text">
                                        <p style="display: ${tdn}">${value.description}</p>
                                        <p style="display: ${cdn}">${value.category}</p>
                                        <div class="media" style="display: ${i1dn}">
                                            <img src="${value.image_1}" class="w-full h-full object-cover" alt="">
                                        </div>
                                        <div class="media" style="display: ${i2dn}">
                                            <img src="${value.image_2}" class="w-full h-full object-cover" alt="">
                                        </div>
                                    </div>
                                    <span class="block mt-[2px] xl:mt-[3px] text-indigo-800" style="display: ${t2tdn}">Worked : ${value.time_to_time}</span>
                                    <span class="block mt-[2px] xl:mt-[3px] text-indigo-800" style="display: ${pddn}">Published date : ${value.publish_date}</span>
                                    <a class="btn duration-300  hover:bg-red-600 bg-primary inline-block mt-[5px] font-bold"
                                        target="_blank" href="${value.url}" style="display: ${udn}">Live view</a>
                                </div>
                            </div>
                        </div>
                    </article>
                `;
        })
        document.getElementById('u-article').innerHTML = data1;

    }).catch((err) => {
        console.log(err);
    });

}(jQuery));
