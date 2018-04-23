// $(document).ready(function () {
//     $.ajaxSetup({ // cài đặt ajax
//         headers: {"X-CSRFToken": getCookie("csrftoken")} // sử dụng csrft để cấp token. Do hiện nay api rest đem lại mỗi lần vào đều có mã khác nhau
//     });
//     $.ajax({
//         method: 'GET',
//         url: 'giaodich',
//         success: function (data) {
//             $.each(data,function (key,value) {
//
//             });
//         }
//     })
// })
function getMax() {
    // Tìm tên sách gần đúng nhất
    var input = document.getElementById('keytimkiem');
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var k = document.getElementById('input1');
    var arrtg = [];
    input1.value = input.value;
    var arr = document.getElementsByClassName("item");
    // Tính tất cả trường hợp trả về
    for (var i = 0; i < arr.length; i++) {
        tg = arr[i].innerText;
        console.log(tg)
        console.log(input1.value)
        arrtg[i] = timmax(input1.value, tg);
    }
    var min = arrtg[0];
    // Tìm thằng gần đúng nhất
    for (var i = 0; i < arrtg.length; i++) {
        if (arrtg[i] < min) {
            min = arrtg[i];
        }
    }
    // sử lý set giá trị và tạo bảng
    for (var i = 0; i < arrtg.length; i++) {
        if (arrtg[i] == min) {
            input2.value = arr[i].innerText;
            test(input.value, arr[i].innerText);
            break;
        }
    }


}

function timmax(input1, input2) {
    // tương tự hàm tết nhưng chỉ trả về max
    var table = document.getElementById("myTable");
    len_input2 = input2.length;
    len_input1 = input1.length;
    var arr = [];
    for (var i = 0; i <= len_input2; i++) {
        arr[i] = [];
    }
    for (var i = 0; i <= len_input2; i++) {
        for (var j = 0; j <= len_input1; j++) {
            if (i == 0) {
                arr[i][j] = j;
            }
            else if (j == 0) {
                arr[i][j] = i;
            }
            else {
                var cost;

                if (input1[j - 1] == input2[i - 1]) {
                    cost = 0;
                }
                else {
                    cost = 1;
                }
                var tg = Math.min(parseInt(arr[i - 1][j] + 1), parseInt(arr[i][j - 1] + 1), parseInt(arr[i - 1][j - 1] + parseInt(cost)));
                arr[i][j] = tg;
            }
        }
    }
    var hi=arr[len_input2][len_input1];
    return hi;
}

function test(input1, input2) {
    // init
    var table = document.getElementById("myTable");
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    // end init
    //get length
    len_input2 = input2.length;
    len_input1 = input1.length;
    //end getleng
    // check không nhập rỗng
    if (len_input1 == 0 || len_input2 == 0) {
        alert("Vui lòng nhập thông tin");
    }
    // Xử lý nếu hợp lệ đầu vào
    else {
        // Khởi tạo mảng 2 chiều
        var arr = [];
        for (var i = 0; i <= len_input2; i++) {
            arr[i] = [];
        }
        // Duyệt mảng
        for (var i = 0; i <= len_input2; i++) {
            for (var j = 0; j <= len_input1; j++) {
                // Set dòng cột bằng index. Xử lý phần viền
                if (i == 0) {
                    arr[i][j] = j;
                }
                else if (j == 0) {
                    arr[i][j] = i;
                }
                else {
                    // xử lý tính phần trung tâm
                    var cost;
                    // check xem hai kí cự có cùng giá trị không
                    if (input1[j - 1] == input2[i - 1]) {
                        cost = 0;
                    }
                    else {
                        cost = 1;
                    }
                    // lấy giá trị min gán vào mảng
                    var tg = Math.min(parseInt(arr[i - 1][j] + 1), parseInt(arr[i][j - 1] + 1), parseInt(arr[i - 1][j - 1] + parseInt(cost)));
                    arr[i][j] = tg;
                }
            }
        }
        // sử dụng vòng lặp để tạp table in html
        for (let i = 0; i <= len_input2; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j <= len_input1; j++) {
                setTimeout(function () {
                    let cell = row.insertCell(j);
                    cell.innerHTML = arr[i][j];
                }, 50 * (i + j));
            }
        }
    }
}

function myFunction() {
    var table = document.getElementById("myTable");
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    len_input2 = input2.length;
    len_input1 = input1.length;
    if (len_input1 == 0 || len_input2 == 0) {
        alert("Vui lòng nhập thông tin");
    }
    else {
        var arr = [];
        for (var i = 0; i <= len_input2; i++) {
            arr[i] = [];
        }
        for (var i = 0; i <= len_input2; i++) {
            for (var j = 0; j <= len_input1; j++) {
                if (i == 0) {
                    arr[i][j] = j;
                }
                else if (j == 0) {
                    arr[i][j] = i;
                }
                else {
                    var cost;

                    if (input1[j - 1] == input2[i - 1]) {
                        cost = 0;
                    }
                    else {
                        cost = 1;
                    }
                    var tg = Math.min(parseInt(arr[i - 1][j] + 1), parseInt(arr[i][j - 1] + 1), parseInt(arr[i - 1][j - 1] + parseInt(cost)));
                    arr[i][j] = tg;
                }
            }
        }
        for (let i = 0; i <= len_input2; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j <= len_input1; j++) {
                setTimeout(function () {
                    let cell = row.insertCell(j);
                    cell.innerHTML = arr[i][j];
                }, 100 * (i + j));
            }
        }
    }
}

$(document).ready(function () {
// Cài đặt token
    $('[data-toggle="tooltip"]').tooltip();
    $.ajaxSetup({ // cài đặt ajax
        headers: {"X-CSRFToken": getCookie("csrftoken")} // sử dụng csrft để cấp token. Do hiện nay api rest đem lại mỗi lần vào đều có mã khác nhau
    });
// Kết thúc cài đặt token
    $.ajax({ //
        method: 'GET', // Phương thức get sẽ cho mình lấy được api và trả về dât nếu api tồn tại
        url: 'api/giaodich/', // API mình muốn lấy
        success: function (data) { // Nếu thành công
            $('.loader').hide()

            $.each(data, function (key, value) { // dò một api có nhiều itemp. Nên duyệt từ đầu đến cuối
                var row = ` 
                <tr>
                    <td><input class="form-control form-control-sm xxx" type="text" readonly value="${value.id }" data-toggle="tooltip" title="${value.id}" </td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${value.seri}" disabled  data-toggle="tooltip" title="${value.seri}"></td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${value.loaif}" disabled  data-toggle="tooltip" title="${value.loaif}"></td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${value.loaitien}" disabled  data-toggle="tooltip" title="${value.loaitien}">
                    </td>
                    <td><input class="form-control form-control-sm thaydoi mot" id="mot" type="number" value="${ value.ngoaite }" disabled  data-toggle="tooltip" title="${value.ngoaite}">
                    </td>
                    <td><input class="form-control form-control-sm thaydoi hai" id="hai" type="number" value="${ value.tigia }" disabled  data-toggle="tooltip" title="${value.tigia}"></td>
                    <td><input class="form-control form-control-sm thaydoi ba" id="ba" type="number" value="${ value.thanhtien}"disabled  data-toggle="tooltip" title="${value.thanhtien}">
                    </td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${ value.phapnhan }" disabled  data-toggle="tooltip" title="${value.phannhan}">
                    </td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${ value.chudutoan}" disabled  data-toggle="tooltip" title="${value.chudutoan}">
                    </td>
                    <td><input type="date" class="form-control form-control-sm thaydoi" value="${ value.ngayhen }" name="ngayhen" disabled  data-toggle="tooltip" title="${value.ngayhen}">
                    </td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ value.vitri }" disabled  data-toggle="tooltip" title="${value.vitri}"></td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ value.noidung }" disabled  data-toggle="tooltip" title="${value.noidung}">
                    </td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ value.nguoihuong }" disabled  data-toggle="tooltip" title="${value.nguoihuong}">
                    </td>
                    
                    <td>
                        <button type="button" class="btn btn-warning btn-sm btn-update " id="ud"  disabled>Update</button>
                    </td>
                    <td colspan="2">
                        <button class="btn btn-danger btn-sm btn-delete"  disabled>Delete</button>
                    </td>
                </tr>
               `;
                // sở dĩ mỗi lần chạy thì cần tạo ra 1 dòng mới để update lên giao diện
                console.log(row);
                $('#content').append(row); // phần div content chứa bảng bên file html được nối thêm row mình vừa tạo
            });

// Xử lý sự kiện cập nhật một giao dịch
            $('.btn-update').click(function () {
                var row = $(this).parent().parent().get(0); // row sẽ bằng thằng cha của thằng cha của nút update -> lấy được dòng
                var input = $(row).find('input'); // lấy hết thẻ input của dòng

                // Xử lý PUT API
                $.ajax({
                    method: 'PUT', // sử dụng phương thức put để thay đổi giá trị
                    url: 'api/giaodich/' + input[0].value + '/', // api sẽ cong thêm id của itemp
                    data: { // đây sẽ set giá trị mới
                        csrf_token: getCookie('csrftoken'),
                        id: input[0].value,
                        seri: input[1].value,
                        loaif: input[2].value,
                        loaitien: input[3].value,
                        ngoaite: input[4].value,
                        tigia: input[5].value,
                        thanhtien: input[6].value,
                        phapnhan: input[7].value,
                        chudutoan: input[8].value,
                        ngayhen: input[9].value,
                        vitri: input[10].value,
                        noidung: input[11].value,
                        nguoihuong: input[12].value,

                    },
                    success: function (data) {
                        alert('update thanh cong');
                        // nếu thành công bán ẽ làm gì
                    },
                    error: function (error) {
                        // lỗi viết ở đây
                    }
                });
                // Hết xử lý PUT
            });
// Kết thúc cập nhật một giao dịch
// Xử lý sự kiện xóa một giao dịch
            $('.btn-delete').click(function () {
                var row = $(this).parent().parent().get(0);
                var input = $(row).find('input');
                $.ajax({
                    method: 'DELETE', // tương tự update nhưng dùng methof delete
                    url: 'api/giaodich/' + input[0].value + '/',
                    data: {
                        csrf_token: getCookie('csrftoken'),
                        id: input[0].value
                    },
                    success: function (data) {
                        $(row).remove();
                        alert("Delete")
                    },
                    error: function (error) {

                    }
                });
            });
// Kết thúc sự kiện xóa một giao dịch

// Xử lý sự kiện mở khóa tất cae các dòng
            // xử lý giao diện
            $('#mosua').click(function () {
                var row = $(this).parent().parent().get(0);
                var input = $(row).find('input');


                var trangThai = document.getElementById('mosua').textContent; // lấy ra text ô button
                var i = $("#content :input");
                var j = $(".xxx");

                if (trangThai.trim() == "OPEN ALL") {
                    i.prop('disabled', false);
                    $("#mosua").html('CLOSE ALL'); // change
                    j.prop('disabled', false);
                }
                else {
                    i.prop('disabled', true);
                    $("#mosua").html('OPEN ALL'); //change
                    j.prop('disabled', false);
                }

            });
// Kết thúc sự kiện xử lý mơ khóa tất cả các dòng
// Xử lý sự kiện mở khóa một dòng
            $('.xxx').click(function () {
                var row = $(this).parent().parent().get(0);
                var input = $(row).find('input');
                var btn = $(row).find('button');


                input.prop('disabled', false)
                btn.prop('disabled', false)
            });

            $('.xxx').dblclick(function () {
                var row = $(this).parent().parent().get(0);
                var input = $(row).find('input');
                var btn = $(row).find('button');
                var j = $(".xxx");

                input.prop('disabled', true)
                btn.prop('disabled', true)
                j.prop('disabled', false);
            });
// Kết thúc xử lý sự kiện xóa một dòng
// Xử lý tính toán thành tiền
            // Chưa lấy được vị trí
            $('.mot').change(function () {
                var viTri = 0;

                var arrMot = $('.mot')
                var mot = arrMot[viTri].value
                var arrHai = $('.hai')
                var hai = arrHai[viTri].value
                var arrBa = $('.ba')
                var ba = arrBa[viTri].value


                var kq = mot * hai;
                //ba.text(kq);

            });
            $('.hai').change(function () {
                var viTri = 0;

                var arrMot = $('.mot')
                var mot = arrMot[viTri].value
                var arrHai = $('.hai')
                var hai = arrHai[viTri].value
                var arrBa = $('.ba')
                var ba = arrBa[viTri].value;


                var kq = mot * hai;
                //ba.text(kq);

            });
// Xử lý tính toán thành tiền


        }
    });

// Xử lý thêm một giao dịch
    $('#add').click(function () { // xử lý thêm. khi nhấn vào nút xử lý
        var row = $(this).parent().parent().get(0);
        var input = $(row).find('input');
        var op = $(row).find('select')
        $.ajax({
            method: 'POST', // ta sử dụng method post
            url: 'api/giaodich/',
            data: { // lấy thong tin giao diện thêm
                csrf_token: getCookie('csrftoken'),
                loaif: op[0].value,
                loaitien: op[1].value,

                id: input[0].value,
                seri: input[1].value,
                ngoaite: input[2].value,
                tigia: input[3].value,
                thanhtien: input[4].value,
                phapnhan: input[5].value,
                chudutoan: input[6].value,
                ngayhen: input[7].value,
                vitri: input[8].value,
                noidung: input[9].value,
                nguoihuong: input[10].value,


            },
            success: function (data) { // nếu thành công thì tạo ra một dòng mới ở bảng
                console.log(data);
                var row = `
                <tr>
                    <td><input class="form-control form-control-sm xxx" type="text" value="${data.id }" readonly></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data.seri}" disabled></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data.loaif}" disabled></td>
                    <td><input class="form-control form-control-sm" type="text" value="${data.loaitien}" disabled>
                    </td>
                    <td><input class="form-control form-control-sm mot" id="mot" type="number" value="${ data.ngoaite }" disabled>
                    </td>
                    <td><input class="form-control form-control-sm hai" id="hai" type="number" value="${ data.tigia }" disabled></td>
                    <td><input class="form-control form-control-sm ba" id="ba" type="number" value="${ data.thanhtien}" disabled>
                    </td>
                    <td><input class="form-control form-control-sm" type="text" value="${ data.phapnhan }" disabled>
                    </td>
                    <td><input class="form-control form-control-sm" type="text" value="${ data.chudutoan}" disabled>
                    </td>
                    <td>
                        <input type="date" class="form-control form-control-sm" value="${ data.ngayhen }" name="ngayhen" disabled>
                    </td>
                    <td><input class="form-control form-control-sm" type="text" value="${ data.vitri }" disabled></td>
                    <td><input class="form-control form-control-sm" type="text" value="${ data.noidung }" disabled>
                    </td>
                    <td><input class="form-control form-control-sm" type="text" value="${ data.nguoihuong }" disabled>
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm btn-update"  disabled id="ud">Update</button>
                    </td>
                    <td colspan="2">
                        <button class="btn btn-danger btn-sm btn-delete"  disabled>Delete</button>
                    </td>
                </tr>
               `;
                $('#content').append(row);
// Kết thúc thêm một giao dịch
// Xử lý set lại trạng thái khóa sau khi thêm
                var i = $("#content :input");
                i.prop('disabled', true);
                $("#mosua").html('OPEN ALL'); //change
                var j = $(".xxx");
                j.prop('disabled', false);
                // phải gọi lại hàm update vs delete vì dòng mới tạo chưa được bắt 2 dòng đấy. thế mới cay
// Kết thúc set lại trạng thái sau khi thêm
// Xử lý sửa đổi một giao dịch
                $('.btn-update').click(function () {
                    var row = $(this).parent().parent().get(0);
                    var input = $(row).find('input');
                    $.ajax({
                        method: 'PUT',
                        url: 'api/giaodich/' + input[0].value + '/',
                        data: {
                            csrf_token: getCookie('csrftoken'),
                            id: input[0].value,
                            seri: input[1].value,
                            loaif: input[2].value,
                            loaitien: input[3].value,
                            ngoaite: input[4].value,
                            tigia: input[5].value,
                            thanhtien: input[6].value,
                            phapnhan: input[7].value,
                            chudutoan: input[8].value,
                            ngayhen: input[9].value,
                            vitri: input[10].value,
                            noidung: input[11].value,
                            nguoihuong: input[12].value,
                        },
                        success: function (data) {
                            alert('update thanh cong');
                        },
                        error: function (error) {

                        }
                    });
                });
// Kết thúc xử lý sửa đổi một giao dịch
// Xử lý tính toán thành tiền
                $('#mot').change(function () {

                    var mot = $('#mot').val();
                    var hai = $('#hai').val();
                    var kq = mot * hai;
                    $('#ba').val(kq)

                })
                $('#hai').change(function () {
                    var mot = $('#mot').val();
                    var hai = $('#hai').val();
                    var kq = mot * hai;
                    $('#ba').val(kq)

                })
// Kết thúc tính toán thành tiền
// Xử lý sự kiện xóa một giao dịch
                $('.btn-delete').click(function () {
                    var row = $(this).parent().parent().get(0);
                    var input = $(row).find('input');
                    $.ajax({
                        method: 'DELETE',
                        url: 'api/giaodich/' + input[0].value + '/',
                        data: {
                            csrf_token: getCookie('csrftoken'),
                            //id: input[0].value
                        },
                        success: function (data) {
                            $(row).remove();
                            alert("Delete")
                        },
                        error: function (error) {

                        }
                    });
                })
// Kết thúc xử lý xóa một giao dịch
// Xử lý cho phép nhập từng dòng
                $('.xxx').click(function () {
                    var row = $(this).parent().parent().get(0);
                    var input = $(row).find('input');
                    var btn = $(row).find('button');


                    input.prop('disabled', false)
                    btn.prop('disabled', false)
                });

                $('.xxx').dblclick(function () {
                    var row = $(this).parent().parent().get(0);
                    var input = $(row).find('input');
                    var btn = $(row).find('button');
                    var j = $(".xxx");

                    input.prop('disabled', true)
                    btn.prop('disabled', true)
                    j.prop('disabled', false);
                });
// Kết thúc xử lý cho phép nhập từng dùng

            },
            error: function (error) {
                alert("Bạn chưa nhập mã hoặc mã trùng. Ngoại tệ tỉ giá thành tiền nhập số nguyên.")
            }
        });
    });


// Xử lý tìm kiếm
    $('#tim').click(function () {
        $('.loader').show()
        jQuery('#timkiem').html(''); // xóa trắng nội dung
        $('#img').show();
        var row = $(this).parent().parent().get(0); // row sẽ bằng thằng cha của thằng cha của nút update -> lấy được dòng
        var input = $(row).find('input'); // lấy hết thẻ input của dòng

        $.ajax({
            method: 'GET', // tương tự update nhưng dùng methof delete
            url: 'api/giaodich/' + input[0].value + '/',
            success: function (data) { // dât trả về từ api củ thể
                $('.loader').hide()

                var row = ` 
                <tr>
                    <td><input id="xxx" class="form-control form-control-sm" type="text" readonly value="${data.id }"</td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${data.seri}" readonly></td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${data.loaif}" disabled ></td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${data.loaitien}" disabled >
                    </td>
                    <td><input class="form-control form-control-sm thaydoi mot" id="mot" type="number" value="${ data.ngoaite }" disabled >
                    </td>
                    <td><input class="form-control form-control-sm thaydoi hai" id="hai" type="number" value="${ data.tigia }" disabled ></td>
                    <td><input class="form-control form-control-sm thaydoi ba" id="ba" type="number" value="${ data.thanhtien}" disabled >
                    </td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${ data.phapnhan }" disabled >
                    </td>
                    <td><input class="form-control form-control-sm thaydoi" type="text" value="${ data.chudutoan}" disabled >
                    </td>
                    <td><input type="date" class="form-control form-control-sm thaydoi" value="${ data.ngayhen }" name="ngayhen" disabled >
                    </td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ data.vitri }" disabled ></td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ data.noidung }" disabled >
                    </td>
                    <td><input class="form-control form-control-sm" type="text thaydoi" value="${ data.nguoihuong }" disabled >
                    </td>
                    <td>
                        <button type="button" class="btn btn-warning btn-sm btn-update " id="ud"  disabled>Update</button>
                    </td>
                    <td colspan="2">
                        <button class="btn btn-danger btn-sm btn-delete"  disabled>Delete</button>
                    </td>
                </tr>
               `;
                // sở dĩ mỗi lần chạy thì cần tạo ra 1 dòng mới để update lên giao diện
                console.log(row);
                $('#timkiem').append(row); // phần div content chứa bảng bên file html được nối thêm row mình vừa tạo
            },
            error: function (error) {
                $('.loader').hide()
                alert("Bạn nhập mã không tồn tại")
            }


        });


    });
// Kết thúc xử lý tìm kiếm
// Xử lý tính toán thành tiền
    $('#inputmot').change(function () {

        var one = $('#inputmot').val();
        var two = $('#inputhai').val();


        var sum = one * two;
        $('#inputba').val(sum)

    });
    $('#inputhai').change(function () {
        var mot = $('#inputmot').val();
        var hai = $('#inputhai').val();


        var kq = mot * hai;
        $('#inputba').val(kq)

    });
// Kết thúc tính toán thành tiền

});
// Kết thúc setup ajax và thao tác


// Thay đổi định dạng date
// $(document).ready(
//     function () {
//         $("#datepicker").datepicker({
//             dateFormat: 'yyyy-MM-dd',
//             changeMonth: true, //Tùy chọn này cho phép người dùng chọn tháng
//             changeYear: true //Tùy chọn này cho phép người dùng lựa chọn từ phạm vi năm
//         });
//     }
// );


// Xử lý get Cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Kết thúc xử lý get Cookie