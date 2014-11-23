var fnames = ['EMAIL', 'FNAME', 'LNAME'];
var ftypes = ['email', 'text', 'text'];

$(document).ready(function($) {
    var options = {
        errorClass: 'mce_inline_error',
        errorElement: 'div',
        onkeyup: function() {},
        onfocusout: function() {},
        onblur: function() {}
    };
    var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
    options = {
        url: 'http://rapportive.us2.list-manage2.com/subscribe/post-json?u=9a1adaf549282981a96e171d1&id=4543b695f6&c=?',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        beforeSubmit: function() {
            $('#mce_tmp_error_msg').remove();
            $('.datefield', '#mc_embed_signup').each(
            function() {
                var txt = 'filled';
                var fields = new Array();
                var i = 0;
                $(':text', this).each(
                function() {
                    fields[i] = this;
                    i++;
                });
                $(':hidden', this).each(
                function() {
                    if (fields[0].value == 'MM' && fields[1].value == 'DD' && fields[2].value == 'YYYY') {
                        this.value = '';
                    } else if (fields[0].value == '' && fields[1].value == '' && fields[2].value == '') {
                        this.value = '';
                    } else {
                        this.value = fields[0].value + '/' + fields[1].value + '/' + fields[2].value;
                    }
                });
            });
            return mce_validator.form();
        },
        success: mce_success_cb
    };
    $('#mc-embedded-subscribe-form').ajaxForm(options);
});

function mce_success_cb(resp) {
    $('#mce-success-response').hide();
    $('#mce-error-response').hide();
    if (resp.result == "success") {
        $('#mce-' + resp.result + '-response').show();
        $('#mce-' + resp.result + '-response').html(resp.msg);
        $('#mc-embedded-subscribe-form').each(function() {
            this.reset();
        });
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ', 2);
            if (parts[1] == undefined) {
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]) {
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e) {
            index = -1;
            msg = resp.msg;
        }
        try {
            if (index == -1) {
                $('#mce-' + resp.result + '-response').show();
                $('#mce-' + resp.result + '-response').html(msg);
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<div id="' + err_id + '"> ' + msg + '</div>';

                var input_id = '#mc_embed_signup';
                var f = $(input_id);
                if (ftypes[index] == 'address') {
                    input_id = '#mce-' + fnames[index] + '-addr1';
                    f = $(input_id).parent().parent().get(0);
                } else if (ftypes[index] == 'date') {
                    input_id = '#mce-' + fnames[index] + '-month';
                    f = $(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-' + fnames[index];
                    f = $().parent(input_id).get(0);
                }
                if (f) {
                    $(f).append(html);
                    $(input_id).focus();
                } else {
                    $('#mce-' + resp.result + '-response').show();
                    $('#mce-' + resp.result + '-response').html(msg);
                }
            }
        } catch(e) {
            $('#mce-' + resp.result + '-response').show();
            $('#mce-' + resp.result + '-response').html(msg);
        }
    }
}
