from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
from django.shortcuts import render,redirect
from django.template import loader
from home.models import *
from rest_framework import viewsets
from .serializers import * # * này là lấy hết nha
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,)

## Create your views here.

#rebder để trả về. HttpResponse để tạo kết nối

def giaoDichIndex(request):
    arrGiaoDich = Giaodich.objects.all() #lấy toàn bộ giao dịch
    arrLoaiTien = Loaitien.objects.all() # lấy toàn bộ tiền
    arrLoaiF = Loaigiaodich.objects.all()
    context = { # khởi tạo context để truyền vào
        'loaiTiens': arrLoaiTien, # mục đích load bảng loại tiên vào select
        'giaoDichs': arrGiaoDich,
        'loaifs': arrLoaiF # mục đích load loại f vào select
    }
    return HttpResponse(render(request, "giaodich/index.html",context)) # Tạo trang index với gioa diejn file index.html
def timSach(request):
    arrSach=Sach.objects.all();
    context = { # khởi tạo context để truyền vào
        'sachs': arrSach, # mục đích load bảng loại tiên vào select
    }
    return HttpResponse(render(request, "giaodich/index_dpt.html",context)) # Tạo trang index với gioa diejn file index.html
def createSach(request):
    sach=Sach(gia=request.POST['gia'],nhaxuatban=request.POST['nhaxuatban'],soluong=request.POST['soluong'],tacgia=request.POST['tacgia'],ten=request.POST['ten'],seri=request.POST['seri'])
    sach.save()
    return redirect('/')
def editSach(request,id):
    sach=Sach.objects.get(id=id)
    contect={"sach":sach}
    return render(request,'giaodich/edit_dpt.html',contect)
def deleteSach(request,seri):
    sach=Sach.objects.get(seri=seri)
    sach.delete()
    return redirect('/')

def giaoDichCreate(request):
    arrGiaoDich = Giaodich.objects.all()
    return HttpResponse(render(request, "giaodich/create.html",{ 'giaoDichs': arrGiaoDich})) # thuwe tạo view tạo giao dịch không dùng ajax


#put delete
class PostDetailUpdateAPIView(viewsets.GenericViewSet,
                              RetrieveUpdateDestroyAPIView):
    queryset = Giaodich.objects.all()
    serializer_class = GiaoDichSerializers # Serializers như là cổng chuyển đổi. Qua đấy lấy được bảng Giao dich
    lookup_field = 'id' # Thực hiện tìm kiếm bảng giao dịch theo id


# API get list and create
#get post
class PostListCreateAPIView(viewsets.GenericViewSet,
                            ListCreateAPIView):
    serializer_class = GiaoDichSerializers
    queryset = Giaodich.objects.all() # lấy toàn bộ giao dịch bằng câu lênh

    # thằng Gene... vs Retrive là để hộ trợ đó. Nhấn vào sẽ thấy các hàm
    # ý tưởng để viết API không đầy đủ method là sẽ custom ra một class mới và bỏ các method trong hai thằng đấy
    # chưa thử là bơi cái generics sửa 1 cái là sẽ sửa luôn file trong hệ thống


