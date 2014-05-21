(function(w) {
    var PlaylistApp = new Marionette.Application();

    PlaylistApp.addRegions({
        headerRegion: "#headerRegion",
        sidebarRegion: "#sidebarRegion",
        mainRegion: "#mainRegion",
        Region: '#footerRegion'
    });

    w.PlaylistApp = PlaylistApp;

})(window);
