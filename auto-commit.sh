#!/bin/bash

echo "Начинаем отслеживание файлов для автоматического коммита..."

while true; do
  git status -s | grep -E "^.M|^.A|^.D" > /dev/null
  
  if [ $? -eq 0 ]; then
    echo "Обнаружены изменения, делаем коммит..."
    git add .
    git commit -m "Авто-коммит: $(date)"
    # post-commit hook сам сделает push
  fi

  # Проверяем каждые 5 минут
  sleep 300
done
