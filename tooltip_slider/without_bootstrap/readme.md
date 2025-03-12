# Dropdown dengan Input Slider

Proyek ini adalah implementasi dropdown yang berisi input slider menggunakan **HTML, CSS, dan JavaScript**. Saat pengguna menggeser slider, nilai akan diperbarui secara real-time.

## Demo

Saat pengguna mengarahkan kursor ke tombol, dropdown akan muncul dengan slider di dalamnya. Pengguna dapat menggeser slider untuk memilih nilai, yang akan diperbarui secara otomatis.

## Fitur
- **Dropdown interaktif**: Muncul saat tombol dihover.
- **Input slider**: Pengguna dapat mengatur nilai dengan menggeser slider.
- **Pembaruan nilai real-time**: Nilai slider langsung terlihat saat digeser.

## Cara Menggunakan
1. **Download atau clone repository ini**
   ```bash
   git clone https://github.com/username/repo.git
   ```
2. **Buka file `index.html` di browser**

## Kode Sumber
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Slider</title>
    <style>
        .dropdown { position: relative; display: inline-block; }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: white;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
            padding: 10px;
            border-radius: 5px;
            z-index: 1;
        }
        .dropdown:hover .dropdown-content { display: block; }
        input[type="range"] { width: 100%; }
        .slider-value { text-align: center; font-size: 16px; margin-top: 5px; }
    </style>
</head>
<body>
    <div class="dropdown">
        <button>Pilih Nilai</button>
        <div class="dropdown-content">
            <input type="range" min="0" max="100" value="50" id="slider">
            <div class="slider-value" id="sliderValue">50</div>
        </div>
    </div>
    <script>
        const slider = document.getElementById("slider");
        const sliderValue = document.getElementById("sliderValue");
        slider.addEventListener("input", function() {
            sliderValue.textContent = slider.value;
        });
    </script>
</body>
</html>
```

## Kontribusi
Silakan fork dan buat pull request jika ingin menambahkan fitur baru!

## Lisensi
Proyek ini menggunakan lisensi MIT.

