import os, sys

import jsbridge
from jsbridge import global_settings

this_dir = os.path.abspath(os.path.dirname(__file__))

def cli():
    sys.argv.append('--launch')
    global_settings.MOZILLA_PLUGINS.append('/Users/mikeal/Documents/git/xush/xush/extension')
    global_settings.MOZILLA_PLUGINS.append(os.path.join(this_dir, 'extension'))
    global_settings.MOZILLA_CMD_ARGS += ['-jsconsole']
    jsbridge.cli(shell=False)
    
if __name__ == "__main__":
    cli()
