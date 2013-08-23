set guioptions-=T " hide toolbar
set lines=70 columns=180
colorscheme rubyblue

set guioptions-=aegimrLtT
set guicursor=a:blinkon0
set t_vb=

highlight CursorLine guibg=gray20

AcpDisable

if has('gui_gtk')
  set guifont=Osaka-Mono:h14
end

if has('gui_macvim')
  set transparency=5
end
