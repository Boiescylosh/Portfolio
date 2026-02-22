const a0_0x5a9ae6 = a0_0xed26;
(function (_0x8fc3b3, _0x30f3a4) {
    const _0x1d8d4d = a0_0xed26, _0x47b38a = _0x8fc3b3();
    while (!![]) {
        try {
            const _0x21a42b = -parseInt(_0x1d8d4d(0x1c0)) / 0x1 + -parseInt(_0x1d8d4d(0x2cd)) / 0x2 * (parseInt(_0x1d8d4d(0x22b)) / 0x3) + parseInt(_0x1d8d4d(0x1be)) / 0x4 * (parseInt(_0x1d8d4d(0x254)) / 0x5) + parseInt(_0x1d8d4d(0x2ab)) / 0x6 + parseInt(_0x1d8d4d(0x289)) / 0x7 + -parseInt(_0x1d8d4d(0x24b)) / 0x8 * (parseInt(_0x1d8d4d(0x1b1)) / 0x9) + -parseInt(_0x1d8d4d(0x212)) / 0xa;
            if (_0x21a42b === _0x30f3a4)
                break;
            else
                _0x47b38a['push'](_0x47b38a['shift']());
        } catch (_0x1f2e1f) {
            _0x47b38a['push'](_0x47b38a['shift']());
        }
    }
}(a0_0x4ef3, 0x9fbec));
function a0_0xed26(_0x2b9a57, _0x42df60) {
    _0x2b9a57 = _0x2b9a57 - 0x19c;
    const _0x4ef39c = a0_0x4ef3();
    let _0xed26ba = _0x4ef39c[_0x2b9a57];
    return _0xed26ba;
}
let terminalState = {
    'stage': 0x1,
    'passwordFound': ![],
    'randomText': a0_0x5a9ae6(0x259),
    'password': '//\x20password\x20berhasil\x20dilacak',
    'oliviaTexts': [],
    'mishaTexts': [],
    'lauraTexts': [],
    'foundPassword': ![],
    'mishaPassword': '',
    'oliviaPassword': '',
    'lauraPassword': ''
};
function generateRandomString(_0x1a5718) {
    const _0x151734 = a0_0x5a9ae6, _0x465348 = _0x151734(0x237);
    let _0x2dda12 = '';
    for (let _0x43be43 = 0x0; _0x43be43 < _0x1a5718; _0x43be43++) {
        _0x2dda12 += _0x465348[_0x151734(0x1e9)](Math['floor'](Math[_0x151734(0x2bd)]() * _0x465348[_0x151734(0x1fd)]));
    }
    return _0x2dda12;
}
function generateNamesTexts() {
    const _0x5027fc = a0_0x5a9ae6;
    terminalState['mishaTexts'] = [
        generateRandomString(0xa),
        generateRandomString(0xa),
        generateRandomString(0xa)
    ], terminalState[_0x5027fc(0x1b3)] = [
        generateRandomString(0xa),
        generateRandomString(0xa),
        generateRandomString(0xa)
    ], terminalState[_0x5027fc(0x298)] = [
        generateRandomString(0xa),
        generateRandomString(0xa),
        generateRandomString(0xa)
    ], terminalState[_0x5027fc(0x1fb)] = generateRandomString(0x1e), terminalState[_0x5027fc(0x1d0)] = generateRandomString(0x1e), terminalState[_0x5027fc(0x27c)] = generateRandomString(0x1e);
}
function resetTerminal() {
    const _0x345937 = a0_0x5a9ae6;
    terminalState['stage'] = 0x1, terminalState[_0x345937(0x23e)] = ![], terminalState['foundPassword'] = ![], generateNamesTexts();
    const _0x191a14 = document['getElementById']('terminalOutput');
    if (!_0x191a14)
        return;
    _0x191a14[_0x345937(0x251)] = '', addTerminalLine(_0x345937(0x1c4)), addTerminalLine('\x20'), addTerminalLine(_0x345937(0x20d)), addTerminalLine(_0x345937(0x279)), addTerminalLine('\x22' + terminalState[_0x345937(0x26a)] + '\x22');
}
function addTerminalLine(_0x1d4370) {
    const _0x18e365 = a0_0x5a9ae6, _0x2d829e = document[_0x18e365(0x280)](_0x18e365(0x1d8));
    if (!_0x2d829e)
        return;
    const _0x186484 = document[_0x18e365(0x2bb)](_0x18e365(0x262));
    _0x186484['textContent'] = _0x1d4370, _0x2d829e[_0x18e365(0x25c)](_0x186484), _0x2d829e['scrollTop'] = _0x2d829e[_0x18e365(0x222)];
}
function displayNamesChallenge() {
    const _0xe6c48e = a0_0x5a9ae6;
    addTerminalLine(_0xe6c48e(0x2b4)), addTerminalLine('\x20'), addTerminalLine(_0xe6c48e(0x1f9) + terminalState[_0xe6c48e(0x209)][0x0]), addTerminalLine(_0xe6c48e(0x1f9) + terminalState[_0xe6c48e(0x209)][0x1]), addTerminalLine(_0xe6c48e(0x1f9) + terminalState[_0xe6c48e(0x209)][0x2]), addTerminalLine(_0xe6c48e(0x1dd) + terminalState[_0xe6c48e(0x1b3)][0x0]), addTerminalLine(_0xe6c48e(0x1dd) + terminalState['oliviaTexts'][0x1]), addTerminalLine(_0xe6c48e(0x1dd) + terminalState[_0xe6c48e(0x1b3)][0x2]), addTerminalLine('>>\x20Laura\x20' + terminalState[_0xe6c48e(0x298)][0x0]), addTerminalLine(_0xe6c48e(0x26d) + terminalState[_0xe6c48e(0x298)][0x1]), addTerminalLine(_0xe6c48e(0x26d) + terminalState[_0xe6c48e(0x298)][0x2]);
}
function processCommand(_0x23e7fc) {
    const _0x460d13 = a0_0x5a9ae6;
    _0x23e7fc = _0x23e7fc[_0x460d13(0x23b)]();
    if (terminalState[_0x460d13(0x1f6)] === 0x1) {
        let _0x2b58d6 = _0x23e7fc[_0x460d13(0x297)]();
        _0x2b58d6[_0x460d13(0x256)](_0x460d13(0x1a4)) || _0x2b58d6[_0x460d13(0x256)](_0x460d13(0x21d)) || _0x2b58d6[_0x460d13(0x256)](_0x460d13(0x23f)) || _0x2b58d6[_0x460d13(0x256)]('echo') ? !terminalState[_0x460d13(0x23e)] ? (terminalState[_0x460d13(0x23e)] = !![], addTerminalLine('$\x20' + _0x23e7fc), addTerminalLine(_0x460d13(0x271)), addTerminalLine(_0x460d13(0x1aa) + terminalState[_0x460d13(0x2b6)]), addTerminalLine(''), addTerminalLine(_0x460d13(0x233))) : (addTerminalLine('$\x20' + _0x23e7fc), addTerminalLine('')) : (addTerminalLine('$\x20' + _0x23e7fc), addTerminalLine(_0x460d13(0x2d7)));
    } else {
        if (terminalState['stage'] === 0x2) {
            let _0x31c32f = _0x23e7fc[_0x460d13(0x297)]();
            if (_0x23e7fc[_0x460d13(0x256)](terminalState['oliviaPassword']))
                addTerminalLine('$\x20' + _0x23e7fc), addTerminalLine(_0x460d13(0x29c)), addTerminalLine(_0x460d13(0x229)), terminalState[_0x460d13(0x1c8)] = !![];
            else {
                if (_0x31c32f[_0x460d13(0x256)](_0x460d13(0x2d9)) && _0x31c32f[_0x460d13(0x256)](_0x460d13(0x23f))) {
                    addTerminalLine('$\x20' + _0x23e7fc);
                    let _0x207e83 = _0x23e7fc[_0x460d13(0x287)](/"([^"]+)"/);
                    if (_0x207e83) {
                        let _0x56ec32 = _0x207e83[0x1];
                        if (_0x56ec32 === terminalState[_0x460d13(0x1d0)])
                            addTerminalLine(_0x460d13(0x29c)), addTerminalLine(_0x460d13(0x229)), terminalState['foundPassword'] = !![];
                        else
                            _0x56ec32 === terminalState['mishaPassword'] || _0x56ec32 === terminalState[_0x460d13(0x27c)] ? addTerminalLine(_0x460d13(0x1aa) + generateRandomString(0x64)) : addTerminalLine(_0x460d13(0x1aa) + generateRandomString(0x1e));
                    }
                } else {
                    if (_0x31c32f['includes'](_0x460d13(0x1a4))) {
                        addTerminalLine('$\x20' + _0x23e7fc);
                        if (_0x31c32f[_0x460d13(0x256)](_0x460d13(0x22f)))
                            addTerminalLine(_0x460d13(0x239)), addTerminalLine(_0x460d13(0x1f9) + terminalState[_0x460d13(0x209)][0x0]), addTerminalLine('>>\x20Misha\x20' + terminalState[_0x460d13(0x209)][0x1]), addTerminalLine(_0x460d13(0x1f9) + terminalState[_0x460d13(0x209)][0x2]), addTerminalLine(_0x460d13(0x1aa)), addTerminalLine(_0x460d13(0x19f) + terminalState['mishaPassword']);
                        else {
                            if (_0x31c32f[_0x460d13(0x256)](_0x460d13(0x1fe)))
                                addTerminalLine(_0x460d13(0x20b)), addTerminalLine(_0x460d13(0x26d) + terminalState[_0x460d13(0x298)][0x0]), addTerminalLine(_0x460d13(0x26d) + terminalState['lauraTexts'][0x1]), addTerminalLine(_0x460d13(0x26d) + terminalState['lauraTexts'][0x2]), addTerminalLine(_0x460d13(0x1aa)), addTerminalLine(_0x460d13(0x23a) + terminalState[_0x460d13(0x27c)]);
                            else
                                _0x31c32f[_0x460d13(0x256)]('olivia') ? (addTerminalLine(_0x460d13(0x24d)), addTerminalLine('>>\x20Olivia\x20' + terminalState[_0x460d13(0x1b3)][0x0]), addTerminalLine(_0x460d13(0x1dd) + terminalState['oliviaTexts'][0x1]), addTerminalLine(_0x460d13(0x1dd) + terminalState[_0x460d13(0x1b3)][0x2]), addTerminalLine(_0x460d13(0x1aa)), addTerminalLine(_0x460d13(0x2c9) + terminalState[_0x460d13(0x1d0)])) : addTerminalLine(_0x460d13(0x1ab));
                        }
                    } else
                        _0x23e7fc === '' ? terminalState[_0x460d13(0x1c8)] ? (terminalState[_0x460d13(0x1f6)] = 0x3, addTerminalLine('$\x20'), addTerminalLine(_0x460d13(0x216))) : addTerminalLine('$\x20') : addTerminalLine('$\x20' + _0x23e7fc);
                }
            }
        } else
            terminalState[_0x460d13(0x1f6)] === 0x3 && (_0x23e7fc === '' ? (addTerminalLine('$\x20'), addTerminalLine(_0x460d13(0x216))) : addTerminalLine('$\x20' + _0x23e7fc));
    }
}
function nextPage(_0x569dff) {
    const _0x1486db = a0_0x5a9ae6;
    document[_0x1486db(0x27e)](_0x1486db(0x284))['forEach'](_0x1976a1 => _0x1976a1[_0x1486db(0x29b)][_0x1486db(0x1e0)](_0x1486db(0x278))), document[_0x1486db(0x280)](_0x1486db(0x2cf) + _0x569dff)[_0x1486db(0x29b)][_0x1486db(0x19e)](_0x1486db(0x278)), window[_0x1486db(0x2aa)](0x0, 0x0);
}
function navigateTo(_0x43d87d) {
    nextPage(_0x43d87d);
}
function toggleMenu() {
    const _0x50f9f4 = a0_0x5a9ae6, _0x2297a0 = document[_0x50f9f4(0x280)]('menuOverlay');
    _0x2297a0['style']['display'] = _0x2297a0[_0x50f9f4(0x1d1)]['display'] === _0x50f9f4(0x269) ? _0x50f9f4(0x2c7) : _0x50f9f4(0x269);
}
function closeMenuOnClickOutside(_0x48acc9) {
    const _0x1ffb5a = a0_0x5a9ae6, _0x312877 = document['getElementById'](_0x1ffb5a(0x1de));
    !_0x312877[_0x1ffb5a(0x234)](_0x48acc9[_0x1ffb5a(0x206)]) && !_0x48acc9[_0x1ffb5a(0x206)]['classList'][_0x1ffb5a(0x234)](_0x1ffb5a(0x281)) && (document[_0x1ffb5a(0x280)](_0x1ffb5a(0x1f4))[_0x1ffb5a(0x1d1)][_0x1ffb5a(0x1e4)] = _0x1ffb5a(0x2c7));
}
function showMessageForm() {
    const _0x3b1c85 = a0_0x5a9ae6;
    document[_0x3b1c85(0x280)](_0x3b1c85(0x1db))['style']['display'] = _0x3b1c85(0x269);
}
function hideMessageForm() {
    const _0x395aaf = a0_0x5a9ae6;
    document['getElementById'](_0x395aaf(0x1db))[_0x395aaf(0x1d1)][_0x395aaf(0x1e4)] = _0x395aaf(0x2c7);
}
function a0_0x4ef3() {
    const _0x2d53ee = [
        'DOMContentLoaded',
        'Kelas\x201\x20TMI',
        'https://j.top4top.io/p_3700bv9cg2.png',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gallery-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22',
        'https://h.top4top.io/p_37045nlyf4.jpg',
        'Perfotoan\x20bersama\x20penanggung\x20jawab\x20rayon\x20dan\x20pengasuh\x20kamar',
        'flex',
        'randomText',
        'https://j.top4top.io/p_3700q6yuf0.jpg',
        'https://c.top4top.io/p_3701980ib0.png',
        '>>\x20Laura\x20',
        'Tahfidz\x20Kilat',
        'https://c.top4top.io/p_3702yvglx1.jpg',
        'https://d.top4top.io/p_3703g6x3v6.jpg',
        '>>\x20Memproses...',
        'April',
        'padStart',
        'Pantai\x20Apra',
        'location',
        'Panggung\x20Gembira',
        '.img-card,\x20.personality-card',
        'active',
        'Coba\x20ambil\x20password\x20dari\x20teks\x20ini:',
        'currentTime',
        'galleryModal',
        'lauraPassword',
        'https://c.top4top.io/p_3702wleq02.jpg',
        'querySelectorAll',
        'https://b.top4top.io/p_3704vq4ic4.jpg',
        'getElementById',
        'close-menu-overlay',
        'https://a.top4top.io/p_3702z0ac80.jpg',
        '2021',
        '.container',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22right\x22>',
        'Cianjur',
        'match',
        'Adventure',
        '8512329aDucoO',
        'https://e.top4top.io/p_3703m8b667.jpg',
        'November',
        'Pelaksanaan\x20pelantikan\x20pengurus\x20organisasi\x20untuk\x20mengatur\x20dan\x20membimbing\x20seluruh\x20santri',
        'Jembatan\x20Gantung',
        'Mahasiswa\x20baru\x20UIN\x20Sunan\x20Gunung\x20Djati\x20Bandung',
        'Terakhir\x20main\x20bareng\x20dengan\x20seluruh\x20anggota\x20kelas\x20D',
        'https://d.top4top.io/p_3704bldyr6.jpg',
        '2022',
        'Pesantren',
        'key',
        'galleryGrid',
        'body',
        'https://h.top4top.io/p_3701fb45b5.png',
        'toLowerCase',
        'lauraTexts',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header-divider\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header-text\x22>',
        'Cijapati',
        'classList',
        '>>\x20Selamat\x20anda\x20berhasil!',
        'https://j.top4top.io/p_3702c6gb69.jpg',
        '2023',
        'Menghukum\x20santri\x20dan\x20santriwati\x20yang\x20melanggar\x20aturan\x20pondok',
        'Sabtu',
        'hidden',
        'Menilai\x20penampilan\x20santri\x20dan\x20santriwati',
        'Mengajar\x20Pramuka\x20kepada\x20seluruh\x20anak\x20MIS\x20Ibrahim\x20Ulul\x20Azmi',
        'textContent',
        'https://e.top4top.io/p_3702t7pnx3.jpg',
        'Senin',
        'Perfotoan\x20setelah\x20menyelesaikan\x20acara\x20puncak\x20dari\x20angkatan\x2030\x20yang\x20menampilkan\x20beberapa\x20acara\x20dan\x20melibatkan\x20santri\x20baru\x20dan\x20santri\x20lama',
        '2017',
        'Minggu',
        'scrollTo',
        '7765380INGLwD',
        'https://d.top4top.io/p_3703ei6uw1.jpg',
        'Memberi\x20pengarahan\x20kepada\x20santri\x20dan\x20santriwati\x20mengenai\x20cara\x20berpidato\x20bahasa\x20Arab\x20dan\x20Inggris\x20dan\x20juga\x20pengarahan\x20mengenai\x20kedisiplinan',
        'https://f.top4top.io/p_3704259si2.jpg',
        'https://d.top4top.io/p_3704niyfz0.jpg',
        'Gebyar\x20Seni',
        'Gacoan',
        'https://g.top4top.io/p_3702w4ge25.jpg',
        'Garut',
        'Soal\x202:',
        'https://e.top4top.io/p_3701rl0533.png',
        'password',
        'Ospek\x20jurusan\x20kepada\x20Mahasiswa\x20Baru\x20jurusan\x20Pendidikan\x20Bahasa\x20Arab',
        'Sunmori',
        '%0APesan:\x20',
        'Pelaksanaan\x20ujian\x20terakhir\x20setelah\x20melakukan\x20semua\x20program\x20yang\x20ada\x20di\x20kelas\x206\x20TMI',
        'createElement',
        'https://j.top4top.io/p_3704p9a2t0.jpg',
        'random',
        'https://f.top4top.io/p_3701yeb6d3.png',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'senderEmail',
        'Kebahasaan',
        'forEach',
        '<img\x20src=\x22',
        'img-card\x20',
        'Melakukan\x20lomba\x20antar\x20semester\x20di\x20jurusan\x20Pendidikan\x20Bahasa\x20Arab',
        'Buka\x20bersama\x20Angkatan',
        'none',
        'Melakukan\x20kumpul\x20rutinan\x20setelah\x20beres\x20kuliah',
        '>>\x20Password\x20Olivia:\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header-title\x22>',
        'https://i.top4top.io/p_37042ld485.jpg',
        'https://f.top4top.io/p_3704nag5u8.jpg',
        '974102oAzkIU',
        'Acara\x20yang\x20dilaksanakan\x20oleh\x20kelas\x205\x20TMI\x20mengenai\x20beberapa\x20penampilan',
        'sec',
        'Juni',
        'Oktober',
        'Home\x20Echa',
        'PPL',
        'Dago',
        'keydown',
        'https://k.top4top.io/p_3700jzofi1.jpg',
        '>>\x20command\x20not\x20found',
        'https://g.top4top.io/p_3704p38oo3.jpg',
        'echo',
        'Sujud\x20syukur\x20setelah\x20menyelesaikan\x20semua\x20program\x20kelas\x206',
        'https://f.top4top.io/p_37049339j2.jpg',
        'add',
        '>>\x20Password\x20Misha:\x20',
        'Panitia',
        'Nama:\x20',
        'Pembawa\x20acara\x20di\x20acara\x20perkenalan\x20olahraga\x20dan\x20seni\x20kepada\x20santri\x20baru,\x20dan\x20bahasa\x20yang\x20digunakan\x20yaitu\x20Spanish,\x20Italiano,\x20Mexico',
        'https://e.top4top.io/p_3704vu9gw7.jpg',
        'grep',
        'https://a.top4top.io/p_3703sgb4h0.jpg',
        'Team\x20Acara',
        'getMonth',
        'Selasa',
        'Bukber',
        '>>\x20',
        '>>\x20Perintah\x20tidak\x20dikenal',
        'Masjid\x20Al-Jabar',
        'https://k.top4top.io/p_3701iib7g0.png',
        'getMinutes',
        'Perfotoan\x20sebelum\x20melaksanakan\x20ujian\x20akhir\x20semester',
        'Perfotoan\x20setelah\x20melaksanakan\x20kegiatan\x20Idhul\x20Adha\x20di\x20rumah\x20Ustadz',
        '9GgOXVl',
        'adventure',
        'oliviaTexts',
        'Perfotoan\x20bagian\x20Extrakulikuler\x20sebelum\x20masa\x20jabatan\x20di\x20kepengurusan\x20selesai',
        'Gunung\x20gelap',
        'Kelas\x206B',
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gallery-desc\x22>',
        'value',
        'mailto:razaqhinurhafizh@gmail.com?subject=Contact\x20from\x20',
        'https://k.top4top.io/p_3700c0lah3.jpg',
        'Rabu',
        'Informasi\x20mengenai\x20bahasa\x20Arab\x20dan\x20Inggris,\x20sebelum\x20lari\x20pagi',
        'https://b.top4top.io/p_3701xrubc0.png',
        '68jJMLvK',
        'Momen-momen\x20yang\x20terukir\x20dalam\x20senyuman,\x20tertawa\x20yang\x20menggenggam\x20hati,\x20dan\x20kenangan\x20yang\x20tak\x20akan\x20pudar.\x20Sebuah\x20perjalanan\x20yang\x20dimulai\x20dengan\x20langkah\x20kecil,\x20berakhir\x20dengan\x20cerita\x20yang\x20tak\x20terlupakan.',
        '255127qPDjcc',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gallery-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gallery-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22left\x22>',
        'ratio-9-16',
        'senderName',
        'WELCOME\x20TO\x20MY\x20TERMINAL',
        'Lomba',
        'Pengarahan\x20oleh\x20para\x20Asatidz\x20mengenai\x20acara\x20Khutbatul\x20Arsy\x20untuk\x20mengenalkan\x20pondok\x20kepada\x20santri\x20baru',
        'overflow',
        'foundPassword',
        'Wayang\x20Windu',
        'modal-header',
        'Pantai\x20Jayanti',
        'closest',
        'https://i.top4top.io/p_3704em9wm0.jpg',
        'Kelas\x206\x20TMI',
        'Melakukan\x20bukber\x20rutinan\x20kelas\x20D\x20selama\x20bulan\x20Ramadhan',
        'oliviaPassword',
        'style',
        'https://l.top4top.io/p_3703yd9u42.jpg',
        'https://g.top4top.io/p_37016d1sj4.png',
        'https://a.top4top.io/p_3704rxcji0.jpg',
        'Tabligh\x20Akbar',
        'Mengurus\x20backsound,\x20layar\x20iklan,\x20dan\x20lighting\x20dalam\x20acara\x20Drama\x20Arena\x20yang\x20ditampilkan\x20oleh\x20santri\x20dan\x20santriwati\x20yang\x20di\x20tonton\x20oleh\x20masyarakat\x20dan\x20orang\x20tuanya',
        'toString',
        'terminalOutput',
        'getDay',
        '2019',
        'messageOverlay',
        'Mengenal\x20lebih\x20dekat\x20sesama\x20teman\x20sejurusan',
        '>>\x20Olivia\x20',
        'menuContainer',
        'Riayah',
        'remove',
        'https://i.top4top.io/p_3701d2r2o6.png',
        'https://e.top4top.io/p_37016y8lw2.png',
        '\x22\x20loading=\x22lazy\x22\x20alt=\x22',
        'display',
        'Acara\x20yang\x20dilaksanakan\x20oleh\x20kelas\x204&3\x20Intensive\x20TMI\x20mengenai\x20beberapa\x20penampilan',
        'test',
        'Harap\x20isi\x20semua\x20field\x20(Nama,\x20Email,\x20dan\x20Pesan)!',
        'Ngopi\x20di\x20Stasiun',
        'charAt',
        'Wisuda',
        'Perfotoan\x20sebelum\x20yudisium\x20mengenai\x20informasi\x20penempatan\x20pengabdian\x20ke\x20berbagai\x20pesantren\x20yang\x20notabennya\x20pesantren\x20modern',
        'Kunjungan\x20ke\x20pesantren\x20Al-Mahira\x20yang\x20sedang\x20proses\x20pengembangan\x20dan\x20pembangunan',
        'Event\x20Crypto',
        'https://c.top4top.io/p_3703q3q4v2.jpg',
        'Jumat',
        'Perfotoan\x20dari\x20para\x20anggota\x20yang\x20berperan\x20sebagai\x20cosplayers\x20dari\x20seni\x20dan\x20olahraga',
        'href',
        '\x22\x20loading=\x22lazy\x22>',
        'pesantren',
        'menuOverlay',
        'Nongkrong\x20di\x20Warkop',
        'stage',
        'https://k.top4top.io/p_3704sksqd7.jpg',
        'left',
        '>>\x20Misha\x20',
        'getFullYear',
        'mishaPassword',
        'Pentas\x20Seni',
        'length',
        'laura',
        'https://g.top4top.io/p_3700m54uj0.jpg',
        'Excul\x20Section',
        'personalityCarousel',
        'Silaturrahmi',
        '2018',
        'Kelas\x20D',
        'Panitia\x20Khutbatul\x20Arsy',
        'target',
        'stopPropagation',
        'https://k.top4top.io/p_3704tuwad1.jpg',
        'mishaTexts',
        'https://l.top4top.io/p_370408y792.jpg',
        '>>\x20Mencari\x20\x22Laura\x22...',
        'Mengajar\x20dan\x20memberi\x20pengetahuan\x20kepramukaan',
        'Soal\x201',
        'https://b.top4top.io/p_3700hygvy6.jpg',
        '2025',
        'Bandung',
        'https://e.top4top.io/p_3702xf2ey4.jpg',
        '17768250rYeYkF',
        'senderMessage',
        'addEventListener',
        'https://c.top4top.io/p_3704zbwnc5.jpg',
        '\x22Selamat\x20ya\x20AJG\x20sudah\x20mampu\x20mengerjakan\x20soal\x20yang\x20AING\x20berikan,\x20ingat\x20ya\x20untuk\x20kasih\x20star\x20di\x20github\x20AING\x20yang\x20nama\x20repositorynya\x20Portfolio\x22',
        'UAS\x20Kelas\x20Akhir\x20TMI',
        'https://i.top4top.io/p_3702lmca68.jpg',
        'Operator',
        'Perfotoan\x20dari\x20angkatan\x2030\x20yang\x20telah\x20menyelesaikan\x20pendidikan\x20selama\x206\x20tahun\x20dan\x201\x20tahun\x20pengabdian',
        'carousel16x9',
        'Harap\x20masukkan\x20alamat\x20email\x20yang\x20valid!',
        'strings',
        'Gunung\x20Putri',
        'className',
        'ratio-16-9',
        'https://a.top4top.io/p_37046q67n0.jpg',
        'scrollHeight',
        'Berwisata\x20dengan\x20anggota\x20kelas\x20D\x20pilihan',
        'https://b.top4top.io/p_3703oxsfd4.jpg',
        'Perfotoan\x20seluruh\x20anggota\x20kelas\x20D\x20sebagai\x20kenangan',
        'personality-card',
        'https://l.top4top.io/p_3700uk7ky4.jpg',
        'https://e.top4top.io/p_3704c3cd91.jpg',
        '>>\x20ENTER\x20untuk\x20melanjutkan...',
        'Perfotoan\x20setelah\x20menyelsaikan\x20program\x20mengajar\x20di\x20sekolah\x20MIS\x20Ibrahim\x20Ulul\x20Azmi',
        '3RXabmY',
        'Pembina',
        'Anggota\x20PPL',
        '2015',
        'misha',
        'https://b.top4top.io/p_37023pptv0.jpg',
        'https://b.top4top.io/p_3703ty0941.jpg',
        'Kuliah',
        '>>\x20Password\x20found!\x20Tekan\x20ENTER\x20untuk\x20lanjut...',
        'contains',
        'https://h.top4top.io/p_3700yjuu70.jpg',
        'Membimbing\x20santri\x20dan\x20santriwati\x20membaca\x20dan\x20menghafal\x20Al-Quran\x20untuk\x20di\x20uji\x20hafalan\x20oleh\x20pantia\x20dalam\x20waktu\x2030\x20menit',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        '&body=',
        '>>\x20Mencari\x20\x22Misha\x22...',
        '>>\x20Password\x20Laura:\x20',
        'trim',
        'https://j.top4top.io/p_3701cka607.png',
        '.personality-card',
        'passwordFound',
        'base64',
        'https://c.top4top.io/p_3701jx1uv1.jpg',
        'https://l.top4top.io/p_3704gydy83.jpg',
        'https://a.top4top.io/p_3703ojiic3.jpg',
        'gallery-item',
        'https://d.top4top.io/p_3702wcpmb2.jpg',
        'https://k.top4top.io/p_37033f5xz1.jpg',
        'https://g.top4top.io/p_3702a08n46.jpg',
        'Futsal',
        'https://f.top4top.io/p_3702sabob5.jpg',
        'Perfotoan\x20setelah\x20beres\x20seluruh\x20mata\x20kuliah,\x20kecuali\x20Seminar\x20Proposal,Komprehensif,\x20dan\x20Skripsi',
        'click',
        '1088344GPXeQn',
        'https://f.top4top.io/p_3701k66y24.jpg',
        '>>\x20Mencari\x20\x22Olivia\x22...',
        'Napak\x20Sancang',
        'currentDate',
        'https://j.top4top.io/p_3704dujer1.jpg',
        'innerHTML',
        'https://c.top4top.io/p_37009a2zd7.jpg',
        'terminalInput',
        '235025oBQbmP',
        'Mulahidz',
        'includes',
        '2024',
        'Agustus',
        'AJg8g2vaklJhsB3Nsh0j',
        'kuliah',
        'Desember',
        'appendChild',
        'Kelas\x204\x20TMI',
        '</div>\x0a\x20\x20\x20\x20',
        'Pembagian\x20Almet',
        'September',
        '2020',
        'div'
    ];
    a0_0x4ef3 = function () {
        return _0x2d53ee;
    };
    return a0_0x4ef3();
}
function backToMenu() {
    hideMessageForm(), toggleMenu();
}
function closeMessageOnClickOutside(_0x4dc27b) {
    const _0x71c452 = a0_0x5a9ae6, _0x4932a5 = document[_0x71c452(0x280)]('messageForm');
    if (!_0x4932a5['contains'](_0x4dc27b['target']))
        document[_0x71c452(0x280)](_0x71c452(0x1db))[_0x71c452(0x1d1)]['display'] = _0x71c452(0x2c7);
}
function sendEmail() {
    const _0xfe58b3 = a0_0x5a9ae6, _0x501cec = document[_0xfe58b3(0x280)](_0xfe58b3(0x1c3))[_0xfe58b3(0x1b8)][_0xfe58b3(0x23b)](), _0x13a6d5 = document['getElementById'](_0xfe58b3(0x2c0))[_0xfe58b3(0x1b8)]['trim'](), _0x1abf92 = document['getElementById'](_0xfe58b3(0x213))['value'][_0xfe58b3(0x23b)]();
    if (_0x501cec === '' || _0x13a6d5 === '' || _0x1abf92 === '') {
        alert(_0xfe58b3(0x1e7));
        return;
    }
    const _0x18a082 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!_0x18a082[_0xfe58b3(0x1e6)](_0x13a6d5)) {
        alert(_0xfe58b3(0x21c));
        return;
    }
    const _0x5f53b9 = _0xfe58b3(0x1a1) + _0x501cec + '%0AEmail:\x20' + _0x13a6d5 + _0xfe58b3(0x2b9) + _0x1abf92;
    window[_0xfe58b3(0x275)][_0xfe58b3(0x1f1)] = _0xfe58b3(0x1b9) + encodeURIComponent(_0x501cec) + _0xfe58b3(0x238) + _0x5f53b9, hideMessageForm(), document[_0xfe58b3(0x280)](_0xfe58b3(0x1c3))['value'] = '', document[_0xfe58b3(0x280)](_0xfe58b3(0x2c0))['value'] = '', document['getElementById'](_0xfe58b3(0x213))['value'] = '';
}
function updateDateTime() {
    const _0x206285 = a0_0x5a9ae6, _0x5dbefd = new Date();
    document[_0x206285(0x280)](_0x206285(0x27a))[_0x206285(0x2a4)] = _0x5dbefd['getHours']()[_0x206285(0x1d7)]()[_0x206285(0x273)](0x2, '0') + '.' + _0x5dbefd[_0x206285(0x1ae)]()[_0x206285(0x1d7)]()[_0x206285(0x273)](0x2, '0');
    const _0x1295ea = [
            _0x206285(0x2a9),
            _0x206285(0x2a6),
            _0x206285(0x1a8),
            _0x206285(0x1bb),
            'Kamis',
            _0x206285(0x1ef),
            _0x206285(0x2a0)
        ], _0x39f7e7 = [
            'Januari',
            'Februari',
            'Maret',
            _0x206285(0x272),
            'Mei',
            _0x206285(0x2d0),
            'Juli',
            _0x206285(0x258),
            _0x206285(0x260),
            _0x206285(0x2d1),
            _0x206285(0x28b),
            _0x206285(0x25b)
        ];
    document[_0x206285(0x280)](_0x206285(0x24f))['textContent'] = _0x1295ea[_0x5dbefd[_0x206285(0x1d9)]()] + ',\x20' + _0x5dbefd['getDate']()[_0x206285(0x1d7)]()[_0x206285(0x273)](0x2, '0') + '\x20' + _0x39f7e7[_0x5dbefd[_0x206285(0x1a7)]()] + '\x20' + _0x5dbefd[_0x206285(0x1fa)]();
}
function openGallery(_0x482231) {
    const _0x2696ba = a0_0x5a9ae6, _0x25096d = document[_0x2696ba(0x280)](_0x2696ba(0x27b)), _0x1cc015 = document[_0x2696ba(0x280)](_0x2696ba(0x294));
    let _0x5e2962 = '', _0x7c809f = '';
    if (_0x482231 === _0x2696ba(0x1f3))
        _0x5e2962 = _0x2696ba(0x292), _0x7c809f = 'Pondok\x20Pesantren\x20Darussalam\x20adalah\x20lembaga\x20pendidikan\x20Islam\x20terkemuka\x20di\x20Garut\x20Kersamanah\x20yang\x20memakai\x20sistem\x20TMI\x20(Tarbiyatul\x20Mu’allimin\x20Al-Islamiyah)\x20dengan\x20kurikulum\x20integrasi\x20antara\x20ilmu\x20agama\x20dan\x20umum\x20layaknya\x20Pondok\x20Modern\x20Gontor.\x20Pesantren\x20ini\x20sangat\x20menekankan\x20disiplin\x20karakter\x20dan\x20kemandirian,\x20di\x20mana\x20santrinya\x20wajib\x20menggunakan\x20Bahasa\x20Arab\x20dan\x20Inggris\x20dalam\x20percakapan\x20sehari-hari.\x20Dengan\x20fasilitas\x20asrama\x20putra\x20dan\x20putri\x20yang\x20terpisah\x20secara\x20representatif,\x20Darussalam\x20fokus\x20mencetak\x20kader\x20pemimpin\x20yang\x20unggul\x20secara\x20spiritual\x20sekaligus\x20mumpuni\x20dalam\x20mengejar\x20studi\x20ke\x20berbagai\x20perguruan\x20tinggi\x20ternama\x20di\x20dalam\x20maupun\x20luar\x20negeri.';
    else {
        if (_0x482231 === _0x2696ba(0x25a))
            _0x5e2962 = _0x2696ba(0x232), _0x7c809f = 'UIN\x20Sunan\x20Gunung\x20Djati\x20Bandung\x20Kampus\x202\x20merupakan\x20kawasan\x20akademik\x20modern\x20yang\x20berlokasi\x20di\x20Cimencrang,\x20Panyileukan,\x20dan\x20menjadi\x20pusat\x20bagi\x20beberapa\x20fakultas\x20besar\x20seperti\x20Tarbiyah\x20dan\x20Keguruan\x20(FTK),\x20Syariah\x20dan\x20Hukum\x20(FSH),\x20serta\x20Ekonomi\x20dan\x20Bisnis\x20Islam\x20(FEBI).\x20Kampus\x20ini\x20dikenal\x20dengan\x20fasilitas\x20gedungnya\x20yang\x20relatif\x20baru\x20dan\x20megah,\x20serta\x20lokasinya\x20yang\x20sangat\x20strategis\x20karena\x20berdekatan\x20dengan\x20Polda\x20Jabar\x20dan\x20ikon\x20wisata\x20religi\x20Masjid\x20Raya\x20Al-Jabbar.\x20Dengan\x20suasana\x20belajar\x20yang\x20lebih\x20tertata\x20dan\x20ekosistem\x20mahasiswa\x20yang\x20hidup\x20di\x20sekitar\x20area\x20Cimencrang,\x20Kampus\x202\x20ini\x20menjadi\x20representasi\x20kemajuan\x20UIN\x20Bandung\x20dalam\x20menyediakan\x20sarana\x20pendidikan\x20tinggi\x20Islam\x20yang\x20representatif\x20di\x20Jawa\x20Barat.';
        else
            _0x482231 === _0x2696ba(0x1b2) && (_0x5e2962 = _0x2696ba(0x288), _0x7c809f = _0x2696ba(0x1bf));
    }
    _0x1cc015[_0x2696ba(0x251)] = '';
    const _0x1d17b5 = document[_0x2696ba(0x2bb)](_0x2696ba(0x262));
    _0x1d17b5[_0x2696ba(0x21f)] = _0x2696ba(0x1ca), _0x1d17b5[_0x2696ba(0x251)] = _0x2696ba(0x2ca) + _0x5e2962 + _0x2696ba(0x299) + _0x7c809f + _0x2696ba(0x25e), _0x1cc015[_0x2696ba(0x25c)](_0x1d17b5);
    const _0x2ca196 = {
            'pesantren': [
                {
                    'img': _0x2696ba(0x282),
                    'left': _0x2696ba(0x264),
                    'right': _0x2696ba(0x22e),
                    'desc': _0x2696ba(0x268)
                },
                {
                    'img': 'https://b.top4top.io/p_37020hhai1.jpg',
                    'left': 'Kelas\x203\x20TMI',
                    'right': _0x2696ba(0x2a8),
                    'desc': _0x2696ba(0x1af)
                },
                {
                    'img': _0x2696ba(0x27d),
                    'left': _0x2696ba(0x25d),
                    'right': _0x2696ba(0x203),
                    'desc': _0x2696ba(0x1af)
                },
                {
                    'img': 'https://d.top4top.io/p_3702iz7hu3.jpg',
                    'left': _0x2696ba(0x25d),
                    'right': '2018',
                    'desc': _0x2696ba(0x1bc)
                },
                {
                    'img': _0x2696ba(0x211),
                    'left': _0x2696ba(0x2b0),
                    'right': _0x2696ba(0x203),
                    'desc': _0x2696ba(0x1e5)
                },
                {
                    'img': _0x2696ba(0x248),
                    'left': _0x2696ba(0x1fc),
                    'right': _0x2696ba(0x1da),
                    'desc': _0x2696ba(0x2ce)
                },
                {
                    'img': _0x2696ba(0x246),
                    'left': 'MC\x203\x20bahasa',
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x1a2)
                },
                {
                    'img': 'https://h.top4top.io/p_3702juwe07.jpg',
                    'left': _0x2696ba(0x1a6),
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x1f0)
                },
                {
                    'img': _0x2696ba(0x218),
                    'left': 'Pelantikan\x20OPPD',
                    'right': '2020',
                    'desc': _0x2696ba(0x28c)
                },
                {
                    'img': _0x2696ba(0x29d),
                    'left': _0x2696ba(0x200),
                    'right': '2020',
                    'desc': _0x2696ba(0x1b4)
                },
                {
                    'img': _0x2696ba(0x2ac),
                    'left': _0x2696ba(0x205),
                    'right': '2020',
                    'desc': _0x2696ba(0x1c6)
                },
                {
                    'img': _0x2696ba(0x230),
                    'left': _0x2696ba(0x276),
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x2a7)
                },
                {
                    'img': _0x2696ba(0x26f),
                    'left': _0x2696ba(0x1b6),
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x1b0)
                },
                {
                    'img': _0x2696ba(0x244),
                    'left': _0x2696ba(0x1ce),
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x1eb)
                },
                {
                    'img': _0x2696ba(0x2a5),
                    'left': _0x2696ba(0x1ce),
                    'right': _0x2696ba(0x261),
                    'desc': 'Perfotoan\x20bersama\x20Syeikh\x20Abdurrahman\x20dan\x20Syeikh\x20Anwar\x20di\x20bulan\x20Ramadhan\x20setelah\x20membahas\x20Al-Quran'
                },
                {
                    'img': 'https://c.top4top.io/p_3703e7gdj0.jpg',
                    'left': _0x2696ba(0x217),
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x2ba)
                },
                {
                    'img': 'https://f.top4top.io/p_3702ik7qh4.jpg',
                    'left': _0x2696ba(0x1ce),
                    'right': _0x2696ba(0x261),
                    'desc': _0x2696ba(0x19c)
                },
                {
                    'img': _0x2696ba(0x2b2),
                    'left': _0x2696ba(0x1ea),
                    'right': '2021',
                    'desc': _0x2696ba(0x21a)
                },
                {
                    'img': _0x2696ba(0x2af),
                    'left': _0x2696ba(0x255),
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x2ad)
                },
                {
                    'img': _0x2696ba(0x228),
                    'left': _0x2696ba(0x1df),
                    'right': '2021',
                    'desc': _0x2696ba(0x29f)
                },
                {
                    'img': _0x2696ba(0x19d),
                    'left': 'Mulahidz',
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x2a2)
                },
                {
                    'img': 'https://g.top4top.io/p_37049c3sc3.jpg',
                    'left': _0x2696ba(0x219),
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x1d6)
                },
                {
                    'img': _0x2696ba(0x267),
                    'left': 'Pembina',
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x20c)
                },
                {
                    'img': _0x2696ba(0x2cb),
                    'left': _0x2696ba(0x22c),
                    'right': _0x2696ba(0x283),
                    'desc': 'Mengatur\x20santri\x20untuk\x20bernyanyi\x20bersama\x20di\x20pramuka'
                },
                {
                    'img': 'https://j.top4top.io/p_3704m002j6.jpg',
                    'left': _0x2696ba(0x1a0),
                    'right': _0x2696ba(0x283),
                    'desc': 'Mengatur\x20tempat\x20tamu\x20dan\x20acara,\x20dalam\x20rangka\x20kunjungan\x20bupati\x20Majalengka\x20beserta\x20jajarannya'
                },
                {
                    'img': _0x2696ba(0x1f7),
                    'left': _0x2696ba(0x202),
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x1ec)
                },
                {
                    'img': _0x2696ba(0x1d4),
                    'left': _0x2696ba(0x26e),
                    'right': _0x2696ba(0x283),
                    'desc': _0x2696ba(0x236)
                }
            ],
            'kuliah': [
                {
                    'img': _0x2696ba(0x2bc),
                    'left': _0x2696ba(0x25f),
                    'right': _0x2696ba(0x291),
                    'desc': _0x2696ba(0x28e)
                },
                {
                    'img': _0x2696ba(0x208),
                    'left': 'Tawaba',
                    'right': _0x2696ba(0x29e),
                    'desc': _0x2696ba(0x2b7)
                },
                {
                    'img': _0x2696ba(0x20a),
                    'left': 'Makrab',
                    'right': '2023',
                    'desc': _0x2696ba(0x1dc)
                },
                {
                    'img': 'https://a.top4top.io/p_37043q3fv3.jpg',
                    'left': _0x2696ba(0x1a9),
                    'right': _0x2696ba(0x29e),
                    'desc': _0x2696ba(0x1cf)
                },
                {
                    'img': _0x2696ba(0x27f),
                    'left': _0x2696ba(0x2b1),
                    'right': _0x2696ba(0x257),
                    'desc': _0x2696ba(0x2c8)
                },
                {
                    'img': _0x2696ba(0x215),
                    'left': _0x2696ba(0x1c5),
                    'right': _0x2696ba(0x257),
                    'desc': _0x2696ba(0x2c5)
                },
                {
                    'img': _0x2696ba(0x290),
                    'left': _0x2696ba(0x247),
                    'right': '2024',
                    'desc': 'Kegiatan\x20rutinan\x20kelas\x20D\x20Pria'
                },
                {
                    'img': _0x2696ba(0x1a3),
                    'left': _0x2696ba(0x24e),
                    'right': _0x2696ba(0x20f),
                    'desc': _0x2696ba(0x223)
                },
                {
                    'img': _0x2696ba(0x2cc),
                    'left': _0x2696ba(0x1c9),
                    'right': '2025',
                    'desc': _0x2696ba(0x28f)
                },
                {
                    'img': 'https://g.top4top.io/p_3704l4ehb9.jpg',
                    'left': 'Foto\x20Studio',
                    'right': _0x2696ba(0x20f),
                    'desc': _0x2696ba(0x225)
                },
                {
                    'img': 'https://e.top4top.io/p_3704lq8hw0.jpg',
                    'left': _0x2696ba(0x204),
                    'right': _0x2696ba(0x20f),
                    'desc': _0x2696ba(0x249)
                },
                {
                    'img': _0x2696ba(0x221),
                    'left': _0x2696ba(0x2d3),
                    'right': _0x2696ba(0x20f),
                    'desc': 'Perfotoan\x20setelah\x20menyelesaikan\x20program\x20mengajar\x20di\x20Fakultas\x20Tarbiyah\x20dan\x20Keguruan'
                },
                {
                    'img': _0x2696ba(0x2ae),
                    'left': _0x2696ba(0x22d),
                    'right': _0x2696ba(0x20f),
                    'desc': _0x2696ba(0x22a)
                },
                {
                    'img': _0x2696ba(0x2d8),
                    'left': 'Pembina',
                    'right': _0x2696ba(0x20f),
                    'desc': _0x2696ba(0x2a3)
                },
                {
                    'img': 'https://h.top4top.io/p_3704jwkb54.jpg',
                    'left': _0x2696ba(0x2c1),
                    'right': '2024',
                    'desc': 'Perfotoan\x20setelah\x20selesai\x20latihan\x20kebahasaan\x20dari\x20kampus\x20UIN\x20Sunan\x20Gunung\x20Dajti\x20Bandung'
                }
            ],
            'adventure': [
                {
                    'img': 'https://j.top4top.io/p_370315w3e0.jpg',
                    'left': _0x2696ba(0x1ac),
                    'right': _0x2696ba(0x210),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x245),
                    'left': _0x2696ba(0x21e),
                    'right': 'Lembang',
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x1d2),
                    'left': _0x2696ba(0x1b5),
                    'right': 'Garut',
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x242),
                    'left': _0x2696ba(0x28d),
                    'right': _0x2696ba(0x2b3),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x224),
                    'left': 'Masjid\x20Al-Jabar',
                    'right': _0x2696ba(0x286),
                    'desc': ''
                },
                {
                    'img': 'https://c.top4top.io/p_3703lfme75.jpg',
                    'left': _0x2696ba(0x1cb),
                    'right': 'Cianjur',
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x270),
                    'left': _0x2696ba(0x274),
                    'right': _0x2696ba(0x286),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x28a),
                    'left': _0x2696ba(0x2d2),
                    'right': 'Cianjur',
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x1a5),
                    'left': _0x2696ba(0x1f5),
                    'right': _0x2696ba(0x2b3),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x1ee),
                    'left': _0x2696ba(0x1e8),
                    'right': _0x2696ba(0x2b3),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x231),
                    'left': _0x2696ba(0x2c6),
                    'right': 'Garut',
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x1cd),
                    'left': _0x2696ba(0x2b8),
                    'right': _0x2696ba(0x29a),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x250),
                    'left': _0x2696ba(0x1d5),
                    'right': _0x2696ba(0x2b3),
                    'desc': ''
                },
                {
                    'img': 'https://k.top4top.io/p_3704br2lo2.jpg',
                    'left': _0x2696ba(0x1ed),
                    'right': _0x2696ba(0x2d4),
                    'desc': ''
                },
                {
                    'img': _0x2696ba(0x241),
                    'left': _0x2696ba(0x1ed),
                    'right': 'Gudsel',
                    'desc': ''
                }
            ]
        }, _0x16030e = _0x2ca196[_0x482231] || _0x2ca196['pesantren'];
    _0x16030e[_0x2696ba(0x2c2)](_0x5c7af6 => {
        const _0x1d38f7 = _0x2696ba, _0x18ca2d = document[_0x1d38f7(0x2bb)]('div');
        _0x18ca2d['className'] = _0x1d38f7(0x243), _0x18ca2d['innerHTML'] = _0x1d38f7(0x266) + _0x5c7af6['img'] + _0x1d38f7(0x1e3) + _0x5c7af6[_0x1d38f7(0x1f8)] + _0x1d38f7(0x1c1) + _0x5c7af6[_0x1d38f7(0x1f8)] + _0x1d38f7(0x285) + _0x5c7af6['right'] + _0x1d38f7(0x1b7) + _0x5c7af6['desc'] + _0x1d38f7(0x2bf), _0x1cc015['appendChild'](_0x18ca2d);
    }), _0x25096d[_0x2696ba(0x29b)]['add'](_0x2696ba(0x278)), document[_0x2696ba(0x295)][_0x2696ba(0x1d1)]['overflow'] = _0x2696ba(0x2a1);
}
function closeGallery() {
    const _0x32bcb2 = a0_0x5a9ae6, _0x335967 = document[_0x32bcb2(0x280)](_0x32bcb2(0x27b));
    _0x335967[_0x32bcb2(0x29b)][_0x32bcb2(0x1e0)](_0x32bcb2(0x278)), document[_0x32bcb2(0x295)][_0x32bcb2(0x1d1)][_0x32bcb2(0x1c7)] = '';
}
document[a0_0x5a9ae6(0x214)](a0_0x5a9ae6(0x263), function () {
    const _0x23f494 = a0_0x5a9ae6, _0x1a21b6 = document[_0x23f494(0x280)](_0x23f494(0x253));
    _0x1a21b6 && (resetTerminal(), _0x1a21b6[_0x23f494(0x214)](_0x23f494(0x2d5), function (_0x39fcdf) {
        const _0x33233e = _0x23f494;
        if (_0x39fcdf[_0x33233e(0x293)] === 'Enter') {
            const _0x2e13ac = this[_0x33233e(0x1b8)];
            terminalState[_0x33233e(0x1f6)] === 0x1 && terminalState['passwordFound'] && _0x2e13ac === '' ? (terminalState[_0x33233e(0x1f6)] = 0x2, addTerminalLine('$\x20'), displayNamesChallenge()) : processCommand(_0x2e13ac), this[_0x33233e(0x1b8)] = '';
        }
    }));
    const _0x1d79cd = [
            _0x23f494(0x235),
            _0x23f494(0x1ff),
            _0x23f494(0x265),
            _0x23f494(0x1ba),
            _0x23f494(0x227),
            'https://a.top4top.io/p_37002h5935.png',
            _0x23f494(0x20e),
            _0x23f494(0x252),
            _0x23f494(0x26b),
            _0x23f494(0x2d6)
        ], _0x29e317 = document[_0x23f494(0x280)](_0x23f494(0x201));
    _0x29e317 && _0x1d79cd[_0x23f494(0x2c2)](_0x2ce585 => {
        const _0x31e6b4 = _0x23f494, _0x54b246 = document[_0x31e6b4(0x2bb)]('div');
        _0x54b246['className'] = _0x31e6b4(0x226), _0x54b246['innerHTML'] = _0x31e6b4(0x2c3) + _0x2ce585 + _0x31e6b4(0x1f2), _0x54b246[_0x31e6b4(0x214)](_0x31e6b4(0x24a), function (_0x38dddc) {
            const _0x51251b = _0x31e6b4;
            _0x38dddc['stopPropagation'](), document['querySelectorAll'](_0x51251b(0x23d))['forEach'](_0x5baa2e => _0x5baa2e[_0x51251b(0x29b)]['remove'](_0x51251b(0x278))), this[_0x51251b(0x29b)][_0x51251b(0x19e)](_0x51251b(0x278));
        }), _0x29e317[_0x31e6b4(0x25c)](_0x54b246);
    });
    const _0x309d96 = [
            _0x23f494(0x26c),
            'https://d.top4top.io/p_3701g31871.jpg',
            _0x23f494(0x1e2),
            _0x23f494(0x2be),
            _0x23f494(0x1d3),
            _0x23f494(0x296),
            _0x23f494(0x1e1),
            _0x23f494(0x23c),
            'https://k.top4top.io/p_3701xs48s8.png'
        ], _0x215c82 = [
            _0x23f494(0x1bd),
            _0x23f494(0x240),
            'https://d.top4top.io/p_3701sk7wr2.jpg',
            _0x23f494(0x2b5),
            _0x23f494(0x24c),
            _0x23f494(0x1ad),
            'https://d.top4top.io/p_3701dg32x0.png'
        ];
    function _0xa4f442(_0x267405, _0x3b70fd, _0xa9d9f7) {
        const _0x46f94d = _0x23f494, _0xf567d = document[_0x46f94d(0x280)](_0x267405);
        if (!_0xf567d)
            return;
        _0x3b70fd[_0x46f94d(0x2c2)](_0x10c061 => {
            const _0x158f92 = _0x46f94d, _0xc505a6 = document['createElement'](_0x158f92(0x262));
            _0xc505a6[_0x158f92(0x21f)] = _0x158f92(0x2c4) + _0xa9d9f7, _0xc505a6[_0x158f92(0x251)] = _0x158f92(0x2c3) + _0x10c061 + _0x158f92(0x1f2), _0xc505a6[_0x158f92(0x214)](_0x158f92(0x24a), function (_0x13dacf) {
                const _0x230d5b = _0x158f92;
                _0x13dacf[_0x230d5b(0x207)](), document[_0x230d5b(0x27e)]('#' + _0x267405 + '\x20.img-card')[_0x230d5b(0x2c2)](_0x2cd8d0 => _0x2cd8d0[_0x230d5b(0x29b)][_0x230d5b(0x1e0)](_0x230d5b(0x278))), this[_0x230d5b(0x29b)][_0x230d5b(0x19e)](_0x230d5b(0x278));
            }), _0xf567d[_0x158f92(0x25c)](_0xc505a6);
        });
    }
    _0xa4f442('carousel9x16', _0x309d96, _0x23f494(0x1c2)), _0xa4f442(_0x23f494(0x21b), _0x215c82, _0x23f494(0x220)), document['addEventListener']('click', function (_0x30a659) {
        const _0x39f992 = _0x23f494;
        !_0x30a659[_0x39f992(0x206)]['closest']('.img-card') && !_0x30a659[_0x39f992(0x206)][_0x39f992(0x1cc)](_0x39f992(0x23d)) && document[_0x39f992(0x27e)](_0x39f992(0x277))[_0x39f992(0x2c2)](_0x1f0532 => _0x1f0532[_0x39f992(0x29b)][_0x39f992(0x1e0)](_0x39f992(0x278)));
    }), window[_0x23f494(0x214)]('click', function (_0x509049) {
        const _0x566974 = _0x23f494, _0x34fd60 = document[_0x566974(0x280)](_0x566974(0x27b));
        _0x509049[_0x566974(0x206)] === _0x34fd60 && closeGallery();
    }), updateDateTime(), setInterval(updateDateTime, 0x3e8);
});
