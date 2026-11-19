const target1 = "DarkMmd?"
const target2 = "Mohammadamin?"
var t2 = false
const item = document.getElementById("name-span")
item.textContent = ""
var i = 0
var last_i = 0
var namelen = target1.length
document.getElementById("mslash").textContent = "|"
// var max = target1.lenght
function writer() {
    if (i < target2.length && t2) {
        item.innerHTML += target2.charAt(i)
        i++
        if (i == target2.length) {

            setTimeout(writer, 1000)
            // t2 = false
        } else {
            setTimeout(writer, 50)

        }
    }
    else if (i < namelen) {
        if (t2 == false) {
            // alert("s" + i)
            item.innerHTML += target1.charAt(i)
            i++
            if (i == namelen) {

                setTimeout(writer, 1000)
                // t2 = true
            } else {
                setTimeout(writer, 50)

            }
        }


    }
    else if (item.innerHTML.length > 0) {
        // item.innerHTML[namelen - last_i]
        // item.innerHTML = item.innerHTML.replace(item.innerHTML[item.innerHTML.length - 1], "")
        item.innerHTML = item.innerHTML.slice(0, -1)
        last_i++
        if (t2) {
            // alert(i)
            if (last_i == target2.length) {
                setTimeout(writer, 1000)
                last_i = 0
                i = 0
                t2 = false
            } else {
                setTimeout(writer, 50)

            }
        } else {


            if (last_i == namelen) {

                setTimeout(writer, 1000)
                last_i = 0
                i = 0
                t2 = true

            } else {
                setTimeout(writer, 50)

            }
        }
        // alert(target2.length)
    }
}
writer()