// Create DB and collection
db = new Mongo().getDB("geothermos");
db.createCollection("temperatures");

function getRandomInt(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(4);
}

function generateRandomId() {
    return makeid(25);
}

function farenheit(x) {
    return x * 9 / 5 + 32;
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function generateFakeUrl() {
    return 'https://drive.google.com/file/d/' + makeid(30) + '/view?usp=sharing';
}

nodes = ['Alfa', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega']
used_urls = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
urls = [
    'https://drive.google.com/file/d/1eRca2A6PZQ-0s4VzhDIbgdm6XxtUBVF4/view?usp=sharing',
    'https://drive.google.com/file/d/1sPn8wZIuwwMJjbvdPMkdM6xUIc7is6Mi/view?usp=sharing',
    'https://drive.google.com/file/d/1-g23zTupTFRp7srZsaWIhu0QCTkUTKB7/view?usp=sharing',
    'https://drive.google.com/file/d/1BstTMwHh4DScUFsAgIQcWGQwyD2g4RfM/view?usp=sharing',
    'https://drive.google.com/file/d/1BzsVMt8TYkUjq6BNxIPqQbaFyQNvUH_U/view?usp=sharing',
    'https://drive.google.com/file/d/1HdebAdtWyUMIqF4G3fZSkU76g73-GZ9k/view?usp=sharing',
    'https://drive.google.com/file/d/1L0wcxp1f8jTeArLdqg9gqeH58SHxKy1w/view?usp=sharing',
    'https://drive.google.com/file/d/1QjkkYrfgb5TyGUPTMlpLCXZ_JFRfU0ZT/view?usp=sharing',
    'https://drive.google.com/file/d/1Tqj5nGVOI1cTapeAkT7Uclaw1KtML6Dl/view?usp=sharing',
    'https://drive.google.com/file/d/1Zg9sDztyHaFuNjt9w0IjjG-bIB1gHb-1/view?usp=sharing',
    'https://drive.google.com/file/d/1_rVElHOVSh-EqYpKoi0rrCczMoULFBZF/view?usp=sharing',
    'https://drive.google.com/file/d/1c4HoSmG0pHmWrezvTksCmoN7u0BhBMKd/view?usp=sharing',
    'https://drive.google.com/file/d/1hxyYng_UFfUasA7XHCHGWvj9Rb2Od4mh/view?usp=sharing',
    'https://drive.google.com/file/d/1r-jVPldYjVwdDSKZWm7SQOD38Znl43wC/view?usp=sharing',
    'https://drive.google.com/file/d/1x3IJ1sK5WVi8AwJf6EJZ4hGoYCXUC7iN/view?usp=sharing'
]

vip_url = 'https://drive.google.com/file/d/1u8cc-H1VAeXutpFrPnOC93kZF6rjSSUM/view?usp=sharing'
vip_ts = 1670330011124;
vip = false;

originTimestamp = 1650330011124;
timestampActual = 1672537008443;

while (originTimestamp <= timestampActual) {

    if (originTimestamp > vip_ts && !vip) {
        const log_id = generateRandomId();
        db.temperatures.insert({
            timestamp: vip_ts,
            calefactor_top: getRandomFloat(farenheit(0), farenheit(1)),
            calefactor_bottom: getRandomFloat(farenheit(0), farenheit(1)),
            node: nodes[getRandomInt(0, nodes.length)],
            log_id: log_id,
        });
        db.logs_decoder.insert({
            log_id: log_id,
            decoder: vip_url
        })
        vip = true;
    }

    const log_id = generateRandomId();

    db.temperatures.insert({
        timestamp: originTimestamp,
        calefactor_top: getRandomFloat(farenheit(15), farenheit(25)),
        calefactor_bottom: getRandomFloat(farenheit(150), farenheit(236)),
        node: nodes[getRandomInt(0, nodes.length)],
        log_id: log_id,
    });


    let decoder_url;
    if (getRandomInt(0, 100) > 50) {
        decoder_url = urls[getRandomInt(0, urls.length)]
    } else {
        decoder_url = generateFakeUrl()
    }

    db.logs_decoder.insert({
        log_id: log_id,
        decoder: decoder_url
    })

    originTimestamp = new Date(originTimestamp + 60000 * getRandomInt(1, 30)).getTime();
}