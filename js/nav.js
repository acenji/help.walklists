// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.menu-toggle');
    var sidebar = document.querySelector('.sidebar');

    if (toggle && sidebar) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });

        // Close sidebar on link click (mobile)
        sidebar.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                }
            });
        });
    }
});
