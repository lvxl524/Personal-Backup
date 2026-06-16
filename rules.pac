function FindProxyForURL(url, host) {
    // 1. 规则：需要走代理的网站
    // 如果访问的网站是这些，就通过代理服务器
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.twitter.com") ||
        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.wikipedia.org")) {
        // 把下面这行里的 代理IP 和 端口 换成你自己的
        return "PROXY 192.168.3.3:7890";
    }

    // 2. 默认规则：其它所有情况，直接连接
    return "DIRECT";
}