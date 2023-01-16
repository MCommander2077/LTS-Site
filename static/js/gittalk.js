var gitalk = new Gitalk({
    clientID: '733989f18518312a64a9',
    clientSecret: '799095d348dba10652042dea145347348ac5a667',
    repo: 'LTS-Site',
    owner: 'MCommander2077',
    admin: ['MCommander2077'],
    number: 1,
    id: location.href,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')