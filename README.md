# Chat-App

پروژه وب اپلیکیشن چت آنلاین، دارای صفحات وب می باشد که در واقع بخش ظاهری آن (Front-end) با استفاده از زبان های HTML ، CSS و بخش اجرایی آن (Back-end)، با استفاده از پلتفرم نود جی اس (Node.js) نوشته شده است.
نود جی اس(Node.js)، یک محیط اجرایی است که به ما اجازه اجرای کد های جاوا اسکریپتی را بر روی سرور می دهد.
صفحات این پروژه با استفاده از سوکت راه اندازی شده اند که از کتابخانه ی معروف Socket.io استفاده شده است.
سوکت، به کاربر اجازه می دهد تا بدون عمل تازه سازی(Refresh)، داده های جدید ارسال یا دریافت کند.
همچنین برای ذخیره اطلاعات دریافت شده از سوی کاربر، از پایگاه داده مونگو دی بی (MongoDB) استفاده شده است و البته لازم به ذکر است که برای ساخت مدل های پایگاه داده از کتابخانه ی معروف مونگوز(Mongoose) استفاده شده است.


 ![image](https://github.com/user-attachments/assets/04d47710-0ab2-42e9-9a29-92355d05e22f)

تصویر اول – صفحه ورود



اگرکاربر قبلاً ثبت نام کرده باشد، می تواند ایمیل و کلمه عبور خود را وارد کند و وارد بخش بعدی شود.
اما برای نمایش دقیق این پروژه قصد دارم دو کاربر ثبت نام کنم و به طور همزمان با دو کاربر وارد شوم و با یکدیگر در صفحه چت صحبت کنم.
ابتدا باید به صفحه ثبت نام مراجعه کنیم، برای رفتن به این صفحه همانند تصویر اول پیش می رویم.


 ![image](https://github.com/user-attachments/assets/d55d2df0-3602-4d30-9627-ae1bb7a99433)

تصویر دوم – صفحه ثبت نام



اطلاعات کاربر را مانند تصویر سوم و چهارم وارد می کنیم و بر روی دکمه ثبت نام کلیک می کنیم.


 ![image](https://github.com/user-attachments/assets/bbe6fd0b-9e8d-4e58-9e17-f6c34f99b064)

تصویر سوم – ثبت نام کاربر 1



 ![image](https://github.com/user-attachments/assets/f7b511bf-d0e5-4c3c-a88b-2de551624b27)

تصویر چهارم – ثبت نام کاربر 2



حال اگر اطلاعات وارد شده صحیح و بدون هرگونه مشکل بوده باشد، اعلان ثبت اطلاعات را دریافت می کنید.


 ![image](https://github.com/user-attachments/assets/20ee4d4c-a0c5-4eef-8221-f9126d184e30)

تصویر پنجم – اعلان ثبت نام موفقیت آمیز



در این بخش وارد پایگاه داده می شوم تا اطلاعات کاربرانی که ثبت نام کرده اند را نمایش دهم.


 ![image](https://github.com/user-attachments/assets/3cd76d63-ffec-450b-ad1b-8dd4557af1f1)

تصویر ششم – اطلاعات ثبت شده کاربران در پایگاه داده



همانطور که مشاهده می کنید کلمه عبور وارد شده توسط کاربر در تصویر ششم قابل مشاهده نمی باشد و آن به این علت است که کلمه های عبور در هنگام ذخیره شدن رمزنگاری(Hash) می شود و اگر دقت کرده باشید کلمه عبور هر دو کاربر را 12345678 انتخاب کردم تا میزان قدرت این معماری رمزنگاری را نشان دهم زیرا کاراکتر های کلمه عبور رمزنگاری شده هیچکدام از دو کاربر، یکسان نمی باشد.


 ![image](https://github.com/user-attachments/assets/dc28d14f-6a9a-4ac8-82d3-fc74115e49d0)

تصویر هفتم – رمزنگاری کلمه عبور



زمانی که ثبت نام با موفقیت انجام می شود به طور خودکار به صفحه ورود هدایت می شوید تا ایمیل و کلمه عبور خود را وارد کنید.


 ![image](https://github.com/user-attachments/assets/c8b6e2c8-cd02-4ff1-99bc-2c0bc5bfff81)

تصویر هشتم – ورود به برنامه



زمانیکه ورود با موفقیت انجام شود به صفحه گروه های من، هدایت می شویم


 ![image](https://github.com/user-attachments/assets/ae2d3ada-88c8-40d5-97bb-4527d3d94d09)

تصویر نهم – صفحه گروه های من



و در این صفحه می توانیم کارهایی مانند:
1. ساختن گروه
2. ملحق شدن به گروه دیگر
3. انتخاب گروه موردنظر جهت چت کردن
را انجام دهیم.
برای مثال گروهی با نام برنامه نویسی میسازم.


 ![image](https://github.com/user-attachments/assets/e30656f2-2b76-40f7-9244-98c5e0b0554b)

تصویر دهم – ساخت گروه



اگر ساخت گروه با موفقیت انجام شد گروه برنامه نویسی بایستی به لیست گروه های من اضافه شود.


 ![image](https://github.com/user-attachments/assets/e601d41b-f906-40cf-924e-b7dadbd02a4e)

تصویر یازدهم – لیست گروه های من



کاربران قادرند فقط در گروهایی که عضو هستند ورود و چت کنند در غیر اینصورت اعلانی با متن "شما عضو گروه موردنظر نمی باشید" را دریافت می کنند.


 ![image](https://github.com/user-attachments/assets/795a5411-f57f-44c6-ad67-2b0f8c63f15d)

تصویر دوازدهم – شروع چت



با زدن دکمه شروع چت، همانند تصویر دوازدهم وارد صفحه چت می شویم.


 ![image](https://github.com/user-attachments/assets/89a8d418-647a-49ec-9231-f137d37ed605)

تصویر سیزدهم – صفحه چت



حالا برای مطمئن شدن از درست کار کردن سوکت ها نیازمند یک کاربر دیگر می باشیم. بنــابراین با ایجاد یک Tab جدید در مرورگر با اطلاعات کاربر 2 وارد می شویم.
اکنون وارد حساب کاربر 2  شده ایم.


 ![image](https://github.com/user-attachments/assets/346fa5e2-852f-4470-8518-c19a14798f21)

تصویر چهاردهم – صفحه گروه های من (حساب کاربر 2)



همانطور که تصویر چهاردهم مشاهده می کنید، گروه های ساخته شده توسط کاربران دیگر در لیست گروه های پیشنهادی، به من نمایش داده می شود.
برای اینکه بتوانم در گروه برنامه نویسی چت کنم، ابتدا بایستی به آن گروه ملحق شوم.


 ![image](https://github.com/user-attachments/assets/90274fcb-041d-4472-8bf9-5a6e5279acee)

تصویر پانزدهم – ملحق شدن به گروه برنامه نویسی



زمانیکه عضویت با موفقیت انجام شود گروه موردنظر به لیست گروه های من اضافه می شود و حالا می توانم همانند تصویر دوازدهم شروع به چت کنم.


 ![image](https://github.com/user-attachments/assets/738bbe2f-b1da-49c5-bf73-e3cf763f5725)

تصویر شانزدهم – لیست گروه های من (کاربر 2)



به بخش پایانی رسیدیم و نمونه ای از چت کردن کاربر 1 و 2 را در گروه برنامه نویسی مشاهده می کنیم.


 ![image](https://github.com/user-attachments/assets/4de57633-42d5-45c1-84c1-6cb26d6f665a)

تصویر هفدهم – صفحه چت کاربر 1


 ![image](https://github.com/user-attachments/assets/8f45799c-8967-4dbc-bf3d-2f9db729c08c)

تصویر هفدهم – صفحه چت کاربر 2

