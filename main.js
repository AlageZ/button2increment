class Random {
    //https://qiita.com/teradonburi/items/815e50450cdc4afac361
    constructor(seed) {
        this.x = 123456789
        this.y = 362436069
        this.z = 521288629
        this.w = seed
    }

    // XorShift
    next() {
        let t

        t = this.x ^ (this.x << 11)
        this.x = this.y
        this.y = this.z
        this.z = this.w
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8))
    }

    // 負の余りを正の余りに変える
    mod(i, j) {
        return (i % j) < 0 ? (i % j) + 0 + (j < 0 ? -j : j) : (i % j + 0)
    }

    // 0以上max未満の乱数を生成する
    nextInt(max) {
        const r = this.next()
        return this.mod(r, max)
    }
}


let count = 0;
let h = 350;
sss.init(1)
drawprocess()
function drawprocess() {
    sss.update()
    let rand = new Random(count*100)
    h += rand.nextInt(150)-75
    document.getElementById("addstyle").innerText = ":root{--h:"+h+";--numlength:"+String(String(count).length)+";}"
    document.getElementById("numdisp").innerText = String(count)
    if (count > 0) {
        sss.startAudio()
        sss.setSeed(count*10)
        sss.playSoundEffect(
            ["coin", "laser", "explosion", "powerUp", "hit", "select", "click","jump"][rand.nextInt(7)],count*10)
    }
}
function clicky(){
    count += 1
    drawprocess()
}
