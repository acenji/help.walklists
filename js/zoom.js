// Tap a screenshot to see it larger. Esc, a click, or the close button closes it. No dependencies.
(function () {
    function close() { var o = document.getElementById('shot-zoom'); if (o) { o.remove(); document.body.style.overflow = ''; } }
    document.addEventListener('click', function (e) {
        var img = e.target.closest ? e.target.closest('img[data-zoom]') : null;
        if (!img) { if (e.target.closest && e.target.closest('#shot-zoom')) close(); return; }
        close();
        var o = document.createElement('div'); o.id = 'shot-zoom'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Screenshot, enlarged');
        var big = document.createElement('img'); big.src = img.getAttribute('data-full') || img.src; big.alt = img.alt || '';
        var x = document.createElement('button'); x.type = 'button'; x.textContent = '\u00d7'; x.setAttribute('aria-label', 'Close');
        o.appendChild(big); o.appendChild(x); document.body.appendChild(o); document.body.style.overflow = 'hidden';
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    document.querySelectorAll('img[data-zoom]').forEach(function (i) { i.style.cursor = 'zoom-in'; });
})();
