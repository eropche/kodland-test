from django.db import models

class Article(models.Model):

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'

    title = models.CharField('Название статьи', max_length=128)
    content = models.TextField('Текст статьи')
    image = models.ImageField('Изображение', upload_to='images/')
    created_date = models.DateTimeField('Дата публикации', auto_now_add=True)

    def __str__(self):
        return self.title