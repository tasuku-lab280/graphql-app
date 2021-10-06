desc 'Add schema information (as comments) to model and fixture files'
task :annotate do
  base_paths = 'app/models/'
  puts command = "bundle exec annotate --models --model-dir #{base_paths} --ignore-model-subdirects"
  puts `#{command}`
end
