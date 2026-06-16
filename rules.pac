function FindProxyForURL(url, host) {
    // 1. 需要走代理的网站（把你常用的加进来）
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        shExpMatch(host, "*.twitter.com") ||
        shExpMatch(host, "*.x.com") ||
        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.instagram.com") ||
        shExpMatch(host, "*.wikipedia.org") ||
        shExpMatch(host, "*.github.com") ||
        shExpMatch(host, "*.githubusercontent.com") ||
        shExpMatch(host, "*.telegram.org") ||
        shExpMatch(host, "*.whatsapp.com")) {
        return "PROXY 192.168.3.3:7890";  // 换成你自己的代理
    }

    // 2. 所有其他网站，直接连接
    return "DIRECT";
}
