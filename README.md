# QLDA-FULL-Ver-1

------ Tạo cơ sở dữ liệu :

  + Tạo database:
	
    create database QuanLyDoPhuot 
		on primary 
		(name='QuanLyDoPhuot_dat',
		filename='D:\QuanLyDoPhuot.mdf',
		size=3MB,
		maxsize=100MB,
		filegrowth=10MB)
		log on (
		name='QuanLyDoPhuot_log',
		filename='D:\QuanLyDoPhuot.ldf',
		size=3MB,
		maxsize=100MB,
		filegrowth=10MB
		)
		use QuanLyDoPhuot 
		go 
		
	+ Tạo bảng:
	
		create table NhaSanXuat
		(
			MaNSX nvarchar(50) not null primary key,
			TenNSX nvarchar(MAX) not null,
			QuocGia nvarchar(MAX) not null
		)
		create table LoaiHang
		(
			MaLoaiHang nvarchar(50) not null primary key,
			TenLoaiHang nvarchar(MAX) not null,
			NoiSanXuat nvarchar(MAX) not null
		)
		create table MatHang
		(
			MaHang nvarchar(50) not null primary key,
			TenHang nvarchar(MAX) not null,
			AnhGioiThieu nvarchar(MAX),
			SoLuong int not null,
			MaNSX nvarchar(50) not null,
			MaLoaiHang nvarchar(50) not null,
			ThongTin nvarchar(MAX),
			constraint Fk1 foreign key(MaNSX) references NhaSanXuat(MaNSX) on update cascade on delete cascade,
			constraint Fk2 foreign key(MaLoaiHang) references LoaiHang(MaLoaiHang) on update cascade on delete cascade
		
		)
		create table GioiTinh
		(
			MaGioiTinh nvarchar(50) not null primary key,
			GioiTinh nvarchar(5) not null
		)
		create table QueQuan
		(
			MaQueQuan nvarchar(50) not null primary key,
			QueQuan nvarchar(50) not null
		)
		
		create table NhanVien
		(
			MaNhanVien nvarchar(50) not null primary key,
			TenNhanVien nvarchar(MAX) not null,
			ChucVu nvarchar(MAX) not null,
			NgaySinh date not null,
			SoDienThoai nvarchar(50) not null,
			Email nvarchar(MAX) not null,
			MaQueQuan nvarchar(50) not null,
			MaGioiTinh nvarchar(50) not null,
			constraint Fk3 foreign key(MaQueQuan) references QueQuan(MaQueQuan) on update cascade on delete cascade,
			constraint Fk4 foreign key(MaGioiTinh) references GioiTinh(MaGioiTinh) on update cascade on delete cascade
		)
		
--------- Tạo giao diện:
	
	+ Giao diện chung:
		
		<!DOCTYPE html>
		<html lang="en">
		<head>
		    {% include "partials/head.html" %}
		</head>
		<body>
		    <div id="wrapper">
		        <header>
		            {% include "partials/header.html" %}
		        </header>
		        <main>
		            {% block main %}{% endblock %}
		        </main>
		        <footer>
		            {% include "partials/footer.html" %}
		        </footer>
		    </div>
		    {% include "partials/scripts.html" %}
		    {% block scripts %}{% endblock %}
		</body>
		</html>
		
	+ Header:
		
		<nav class="navbar navbar-expand-lg navbar-light bg-light thuvienmenu">
		    <a class="navbar-brand" href="#">Buistore</a>
		    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
		            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		        <span class="navbar-toggler-icon"></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		        <div class="navbar-nav">
		            <a class="nav-item nav-link active" href="#">Mũ bảo hiểm<span class="sr-only">(current)</span></a>
		            <a class="nav-item nav-link" href="#">Khẩu trang</a>
		            <a class="nav-item nav-link" href="#"> Áo giáp</a>
		            <a class="nav-item nav-link disabled" href="#">Phụ Kiện</a>
		        </div>
		    </div>
		</nav>
		
	+ Giao diện hiện thị sản phẩm:
		
		<div class="slide" xmlns="http://www.w3.org/1999/html">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="static/img/ONE.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="static/img/TWO.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="static/img/THERE.png" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
		
-------- Tạo API:

	+ Code tạo API Rest:
	
		class PostDetailUpdateAPIView(viewsets.GenericViewSet,
		                              RetrieveUpdateDestroyAPIView):
		    queryset = SanPham.objects.all()
		    serializer_class = SanPhamSerializers # Serializers như là cổng chuyển đổi. Qua đấy lấy được bảng SanPham
		    lookup_field = 'id' # Thực hiện tìm kiếm bảng SanPham theo id
		
		
		# API get list and create
		#get post
		class PostListCreateAPIView(viewsets.GenericViewSet,
		                            ListCreateAPIView):
		    serializer_class = SanPhamSerializers
		    queryset = SanPham.objects.all() # lấy toàn bộ giao dịch bằng câu lênh
				
	+ Định Nghĩa Url:
	
		router = routers.SimpleRouter() #dùng router định nghĩa hai phương thứ django rest hỗ trợ
		router.register(r'sanpham', views.PostListCreateAPIView, base_name="Posts")     # đăng ký API vào router
		router.register(r'sanpham', views.PostDetailUpdateAPIView, base_name="Posts")

		urlpatterns = [
		    url(r'admin/', admin.site.urls),
		    url('^api/', include(router.urls)), # nó sẽ nối
		]
		
		
