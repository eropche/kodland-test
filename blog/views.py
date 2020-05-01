from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect

from .models import Article
from .forms import ArticleForm

def index(request):
    articles = Article.objects.all().order_by('-created_date')[:10]

    return render(request, 'blog/index.html', {'articles': articles})

def createArticle(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = Article()
            article.title = form.cleaned_data['title']
            article.content = form.cleaned_data['content']
            article.image = form.cleaned_data['image']
            article.save()

            return HttpResponseRedirect('/')
    else:
        form = ArticleForm()

    return render(request, 'blog/create_article.html', {'form': form})
