MinecraftAPI.getServerStatus('lts.play.gamesmc.online', {
    port: 25565 // optional, only if you need a custom port
}, function (err, status) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = '查询错误！请刷新本页';
    }

    // you can change these to your own message!
    document.querySelector('.server-online').innerHTML = status.online ? '<font color="green">服务器正在运行中！</font>' : '<font color="brown">服务器未在运行中</font>';
    document.querySelector('.server-players').innerHTML = status.players.now + '/' + status.players.max;
    document.querySelector('.server-version').innerHTML = status.server.name;
});





