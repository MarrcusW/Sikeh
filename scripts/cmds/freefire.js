const _0x4b9f5c = _0x1fcd;
(function (_0x3b7e11, _0x5e91e1) {
    const _0x49df59 = _0x1fcd,
        _0x57909e = _0x3b7e11();
    while (!![]) {
        try {
            const _0x36d446 = -parseInt(_0x49df59(0x14a)) / 0x1 + -parseInt(_0x49df59(0x17e)) / 0x2 * (parseInt(_0x49df59(0x14d)) / 0x3) + parseInt(_0x49df59(0x14e)) / 0x4 * (parseInt(_0x49df59(0x166)) / 0x5) + parseInt(_0x49df59(0x15b)) / 0x6 * (-parseInt(_0x49df59(0x17b)) / 0x7) + parseInt(_0x49df59(0x145)) / 0x8 * (parseInt(_0x49df59(0x142)) / 0x9) + -parseInt(_0x49df59(0x15c)) / 0xa * (parseInt(_0x49df59(0x14f)) / 0xb) + parseInt(_0x49df59(0x164)) / 0xc;
            if (_0x36d446 === _0x5e91e1) break;
            else _0x57909e['push'](_0x57909e['shift']());
        } catch (_0x5e162d) {
            _0x57909e['push'](_0x57909e['shift']());
        }
    }
}(_0x3370, 0x475d3));

function _0x3370() {
    const _0xf08fc0 = ['[DOWNLOADER]', '197996VRSJMu', 'exports', 'videoId', '486rDfGzN', 'senderID', 'https://www.googleapis.com/youtube/v3/playlistItems?key=', '32536PCnuCI', 'contentDetails', 'https://www.googleapis.com/youtube/v3/videos?key=', 'push', 'Loading random Free Fire video 💖...', '128931kxkiCp', 'threadID', 'end', '6sHBOHM', '20188jcTXiF', '2646721Edyetj', 'sendMessage', 'messageID', '[DOWNLOADER] Downloaded', 'Kshitiz & SKY', 'pipe', 'createReadStream', '&id=', 'includes', 'title', 'random', '&playlistId=', '845646PMgSZK', '20fDawWh', 'size', 'audioandvideo', 'info', 'map', 'snippet', '2.0', 'items', '13347000cCJVKL', 'filter', '50qHBRnf', '❌ | Give a next try again 🥱', 'response', '[ERROR]', 'Starting download now!', 'floor', 'sentVideos', 'get', 'error', '&part=contentDetails&maxResults=50', 'createWriteStream', 'data', 'unsendMessage', 'statSync', 'get Free Fire edits videos from YouTube', 'fs-extra', '.mp4', 'Downloading video: ', 'PLCiXFxWx8d2AByHhl7xTg0reGbYHVziWj', 'AIzaSyAO1tuGus4-S8RJID51f8WJAM7LXz1tVNc', 'An error occurred while processing the command.', '14tbalDF', 'length'];
    _0x3370 = function () {
        return _0xf08fc0;
    };
    return _0x3370();
}
const axios = require('axios'),
    fs = require(_0x4b9f5c(0x175)),
    os = require('os'),
    ytdl = require('@distube/ytdl-core');

function _0x1fcd(_0x57b456, _0x245bc4) {
    const _0x3370a1 = _0x3370();
    return _0x1fcd = function (_0x1fcd79, _0x3a94dc) {
        _0x1fcd79 = _0x1fcd79 - 0x142;
        let _0x535224 = _0x3370a1[_0x1fcd79];
        return _0x535224;
    }, _0x1fcd(_0x57b456, _0x245bc4);
}
module[_0x4b9f5c(0x17f)] = {
    'sentVideos': [],
    'config': {
        'name': 'freefire',
        'version': _0x4b9f5c(0x162),
        'role': 0x0,
        'author': '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
        'cooldowns': 0x5,
        'shortDescription': '',
        'longDescription': _0x4b9f5c(0x174),
        'category': '🎬 | Media',
        'dependencies': {
            'fs-extra': '',
            'axios': '',
            'ytdl-core': '',
            'yt-search': ''
        }
    },
    'onStart': async function ({
        api: _0x5e4038,
        event: _0x276054,
        message: _0x534417
    }) {
        const _0x308de7 = _0x4b9f5c;
        try {
            const _0x36bafc = _0x276054[_0x308de7(0x143)],
                _0x4be599 = await _0x5e4038[_0x308de7(0x150)](_0x308de7(0x149), _0x276054[_0x308de7(0x14b)], null, _0x276054[_0x308de7(0x151)]),
                _0x4c47d6 = _0x308de7(0x179),
                _0x3c17c9 = _0x308de7(0x178),
                _0xb07b56 = _0x308de7(0x144) + _0x4c47d6 + _0x308de7(0x15a) + _0x3c17c9 + _0x308de7(0x16f),
                _0x34fb97 = await axios[_0x308de7(0x16d)](_0xb07b56),
                _0x157bc1 = _0x34fb97['data'][_0x308de7(0x163)],
                _0x104d1b = _0x157bc1[_0x308de7(0x160)](_0x3b4080 => _0x3b4080[_0x308de7(0x146)][_0x308de7(0x180)]);
            this[_0x308de7(0x16c)][_0x308de7(0x17c)] === _0x104d1b['length'] && (this[_0x308de7(0x16c)] = []);
            const _0x372ee7 = _0x104d1b[_0x308de7(0x165)](_0x2e469f => !this[_0x308de7(0x16c)][_0x308de7(0x157)](_0x2e469f));
            if (_0x372ee7[_0x308de7(0x17c)] === 0x0) return _0x5e4038[_0x308de7(0x172)](_0x4be599['messageID']), _0x5e4038[_0x308de7(0x150)]('something went wrong', _0x276054['threadID'], null, _0x276054[_0x308de7(0x151)]);
            const _0x4520e8 = _0x372ee7[Math[_0x308de7(0x16b)](Math[_0x308de7(0x159)]() * _0x372ee7[_0x308de7(0x17c)])];
            this['sentVideos'][_0x308de7(0x148)](_0x4520e8);
            const _0x65eca9 = _0x308de7(0x147) + _0x4c47d6 + _0x308de7(0x156) + _0x4520e8 + '&part=snippet,contentDetails',
                _0x3150b5 = await axios[_0x308de7(0x16d)](_0x65eca9),
                _0x13d5ef = _0x3150b5[_0x308de7(0x171)][_0x308de7(0x163)][0x0][_0x308de7(0x161)],
                _0x5d86ac = _0x3150b5[_0x308de7(0x171)][_0x308de7(0x163)][0x0],
                _0x34e210 = _0x13d5ef[_0x308de7(0x158)],
                _0x5e8733 = ytdl(_0x4520e8, {
                    'filter': _0x308de7(0x15e)
                }),
                _0x10fe3e = _0x36bafc + _0x308de7(0x176),
                _0x1a58fe = __dirname + ('/cache/' + _0x10fe3e);
            _0x5e8733[_0x308de7(0x154)](fs[_0x308de7(0x170)](_0x1a58fe)), _0x5e8733['on'](_0x308de7(0x168), () => {
                const _0x2b0635 = _0x308de7;
                console[_0x2b0635(0x15f)](_0x2b0635(0x17d), _0x2b0635(0x16a));
            }), _0x5e8733['on'](_0x308de7(0x15f), () => {
                const _0x1cd9bd = _0x308de7;
                console[_0x1cd9bd(0x15f)](_0x1cd9bd(0x17d), _0x1cd9bd(0x177) + _0x34e210);
            }), _0x5e8733['on'](_0x308de7(0x14c), () => {
                const _0xf5b6b9 = _0x308de7;
                console['info'](_0xf5b6b9(0x152));
                if (fs[_0xf5b6b9(0x173)](_0x1a58fe)[_0xf5b6b9(0x15d)] > 0x1900000) return fs['unlinkSync'](_0x1a58fe), _0x5e4038[_0xf5b6b9(0x172)](_0x4be599[_0xf5b6b9(0x151)]), _0x5e4038[_0xf5b6b9(0x150)](_0xf5b6b9(0x167), _0x276054['threadID'], null, _0x276054[_0xf5b6b9(0x151)]);
                const _0x37528d = {
                    'body': '📹 | Here\'s the random Free Fire video.',
                    'attachment': fs[_0xf5b6b9(0x155)](_0x1a58fe)
                };
                _0x5e4038[_0xf5b6b9(0x150)](_0x37528d, _0x276054[_0xf5b6b9(0x14b)], null, _0x276054[_0xf5b6b9(0x151)], () => {
                    fs['unlinkSync'](_0x1a58fe);
                }), setTimeout(() => {
                    const _0x28827a = _0xf5b6b9;
                    _0x5e4038[_0x28827a(0x172)](_0x4be599[_0x28827a(0x151)]);
                }, 0x2710);
            });
        } catch (_0x26e741) {
            console[_0x308de7(0x16e)](_0x308de7(0x169), _0x26e741), _0x5e4038['sendMessage'](_0x308de7(0x17a), _0x276054['threadID'], null, _0x276054[_0x308de7(0x151)]);
        }
    }
};
