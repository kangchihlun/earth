window.earthConfig = {
    dataSource: {
        weather: {
            url: 'https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_1p00.pl',
            params: {
                file: 'gfs.t00z.pgrb2.1p00.f000',
                all_lev: 'on',
                all_var: 'on',
                subregion: '',
                leftlon: '0',
                rightlon: '360',
                toplat: '90',
                bottomlat: '-90',
                dir: '/gfs.${date}'
            }
        },
        ocean: {
            url: 'https://podaac-opendap.jpl.nasa.gov/opendap/allData/oscar/preview/L4/oscar_third_deg/oscar_vel${date}.nc.gz'
        }
    },
    updateInterval: 3600000, // 1 hour in milliseconds
    defaultProjection: 'orthographic',
    defaultOverlay: 'wind',
    defaultHeight: 'surface'
}; 