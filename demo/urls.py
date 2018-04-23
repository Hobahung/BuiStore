"""demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from home import views # không import  thằng home là chết đấy
from rest_framework import routers # import luôn thằng này vì mình đang dùng nó mà


router = routers.SimpleRouter() #dùng router định nghĩa hai phương thứ django rest hỗ trợ
router.register(r'giaodich', views.PostListCreateAPIView, base_name="Posts")     # đăng ký API vào router
router.register(r'giaodich', views.PostDetailUpdateAPIView, base_name="Posts")

urlpatterns = [
    url(r'admin/', admin.site.urls),
    url('^api/', include(router.urls)), # nó sẽ nối
    url(r'^post', views.giaoDichIndex, name='getgiaoDichIndex'), #r là regular expression : biểu thức chính quy đó : Khớp với kí tự quay đầu dòng
    url(r'^$', views.timSach, name='sachIndex'),
    url(r'^create$', views.createSach),
    url(r'^edit/(?P<id>\d+)$', views.editSach),
    url(r'^delete/(?P<seri>\d+)$', views.deleteSach),
    #url(r'^post', views.loaiTienIndex, name='giaoDichIndex'),
    #url(r'^creat', views.giaoDichCreate, name='giaoDichIndex'),
]


