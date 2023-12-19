//chat gpt helped make this code:
// let imgElement = document.getElementById('imageSrc');
// let inputElement = document.getElementById('fileInput');

// inputElement.addEventListener('change', (e) => {
//   imgElement.src = URL.createObjectURL(e.target.files[0]);
// }, false);


let bodyElement = document.getElementById('mainBody');

bodyElement.onload = function() { 
    onOpenCvReady();
}    
function onOpenCvReady() {
    // Load the hyperspectral image

    // lol stupid chatgpt, imreadAsync is not actually a function in cv. There is no such thing.

    //also I'm pretty sure this is not how you use imread. It returns the image, not passes it to the callback. 
    //Probably because it is not asynchronous because there is no such thing!
    cv.imread('/Volumes/Seagate/SpectralImaging/wheatMoghimi2018/CS.bip', (image) => {
        if (!image.data) {
            console.error('Error loading hyperspectral image');
            return;
        }

        imgData = image.data;
        //lol lets dump the 720 MB file into the console. Good idea chatGPT.
        console.log('Hyperspectral image loaded:', imgData);

        // Load the header file
        fetch('/Volumes/Seagate/SpectralImaging/wheatMoghimi2018/CS.bip.hdr')
            .then(response => response.text())
            .then(header => {
                hdrData = header;
                console.log('Header file loaded:', hdrData);

                parseHeader(hdrData);

            })
            .catch(error => console.error('Error loading header file:', error));
    });
}

function parseHeader(header) {
    const lines = header.split('\n');
    const headerInfo = {};

    lines.forEach(line => {
        const [key, value] = line.split('=').map(str => str.trim());
        if (key && value) {
            headerInfo[key] = value;
        }
    });

// ENVI
// envi
// interleave = bip
// data type = 5
// lines =687
// samples =637
// bands =215
// shutter = 7.04622
// gain = 23.0
// framerate = 27.0
// byte order = 0
// header offset = 0
// wavelength = {404.864, 406.9168, 408.9696, 411.0224, 413.0752, 415.128, 417.1808, 419.2336, 421.2864, 423.3392, 425.392, 427.4448, 429.4976, 431.5504, 433.6032, 435.656, 437.7088, 439.7616, 441.8144, 443.8672, 445.92, 447.9728, 450.0256, 452.0784, 454.1312, 456.184, 458.2368, 460.2896, 462.3424, 464.3952, 466.448, 468.5008, 470.5536, 472.6064, 474.6592, 476.712, 478.7648, 480.8176, 482.8704, 484.9232, 486.976, 489.0288, 491.0816, 493.1344, 495.1872, 497.24, 499.2928, 501.3456, 503.3984, 505.4512, 507.504, 509.5568, 511.6096, 513.6624, 515.7152, 517.768, 519.8208, 521.8736, 523.9264, 525.9792, 528.032, 530.0848, 532.1376, 534.1904, 536.2432, 538.296, 540.3488, 542.4016, 544.4544, 546.5072, 548.56, 550.6128, 552.6656, 554.7184, 556.7712, 558.824, 560.8768, 562.9296, 564.9824, 567.0352, 569.088, 571.1408, 573.1936, 575.2464, 577.2992, 579.352, 581.4048, 583.4576, 585.5104, 587.5632, 589.616, 591.6688, 593.7216, 595.7744, 597.8272, 599.88, 601.9328, 603.9856, 606.0384, 608.0912, 610.144, 612.1968, 614.2496, 616.3024, 618.3552, 620.408, 622.4608, 624.5136, 626.5664, 628.6192, 630.672, 632.7248, 634.7776, 636.8304, 638.8832, 640.936, 642.9888, 645.0416, 647.0944, 649.1472, 651.2, 653.2528, 655.3056, 657.3584, 659.4112, 661.464, 663.5168, 665.5696, 667.6224, 669.6752, 671.728, 673.7808, 675.8336, 677.8864, 679.9392, 681.992, 684.0448, 686.0976, 688.1504, 690.2032, 692.256, 694.3088, 696.3616, 698.4144, 700.4672, 702.52, 704.5728, 706.6256, 708.6784, 710.7312, 712.784, 714.8368, 716.8896, 718.9424, 720.9952, 723.048, 725.1008, 727.1536, 729.2064, 731.2592, 733.312, 735.3648, 737.4176, 739.4704, 741.5232, 743.576, 745.6288, 747.6816, 749.7344, 751.7872, 768.2096, 770.2624, 772.3152, 774.368, 776.4208, 778.4736, 780.5264, 782.5792, 784.632, 786.6848, 788.7376, 790.7904, 792.8432, 794.896, 796.9488, 799.0016, 801.0544, 803.1072, 805.16, 807.2128, 809.2656, 811.3184, 829.7936, 831.8464, 833.8992, 835.952, 838.0048, 840.0576, 842.1104, 844.1632, 846.216, 848.2688, 850.3216, 852.3744, 854.4272, 856.48, 858.5328, 860.5856, 862.6384, 864.6912, 866.744, 868.7968, 870.8496, 872.9024, 874.9552}
// rotation = [(0, 0), (0, 1), (1, 0), (1, 1)]
// label =CS.bip
// history = 3-4 -> RadianceConversion<SpecGroup>[<SpecFilename label:'Imager Calibration' value:G:\BBE\AGROBOT\Shared Work\Data\RawPikaImagery\2016-05-12_GreenhouseSaltStress\PIKA II RadianceCalibration\Pika_110106_11_RadiometricCalibration_12mm_June2015.bip>] -> CorrectFromMeasuredReference<SpecGroup>[<SpecSpectrum label:'ROI Spec.' value:spec34>, <SpecChoice label:'Scale 100% Reflectivity To:' value:1.0 (floats)>]
// reflectance scale factor = 1.0

    const samples = parseInt(headerInfo.samples);
    const numLines = parseInt(headerInfo.lines);
    const bands = parseInt(headerInfo.bands);
    const dataType = headerInfo.datatype;

    console.log('Image Dimensions:', { samples, numLines, bands });
    console.log('Data Type:', dataType);

    // You can use the extracted information for further processing or analysis
    // For example, you might want to display this information on your webpage or use it in your analysis functions
    // ...

    return headerInfo;
}