from rest_framework import serializers
from home.models import *
class GiaoDichSerializers(serializers.ModelSerializer): # nó đơn gian là một bổ chuyện đổi. lớp này mình sử dụng khi muốn chuyển giữa các dạng dữ liệu
    # đây chúng ta chuyển từ database sang api hay ngược lại cũng phải dùng
    class Meta:
        model=Giaodich
        fields='__all__' # lọc toàn bộ key từ database