/* Flowy - Package manager for NPM(Third-party NPM) by @HoaQuyingVN 
 * 
 * Copyright (c) 2024 HoaQuyingVN
 * Use npm install -g flowy to install
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import * as semver from 'semver'; // Sent/Receive version
import * as chalk from 'chalk'; // Console color
import * as axios from 'axios'; // HTTP request
import * as semverUtils from 'semver-utils'; // Compare versions
import * as lockfile from '@yarnpkg/lockfile'; // Lockfile use @yarnpkg

// Check if the package is outdated
const checkUpdate = async () => {
    try {
        const { data: lock } = await axios.get('https://registry.npmjs.org/flowy');
        const { version: current } = package;
        const { version: latest } = lock['flowy'];
        if (semver.gt(latest, current)) {
            console.log(chalk.red(`\n\n  Update available: ${latest} -> ${current}\n`)+chalk.yellow(` => Automatic update is not recommended, please update manually\n`));
          } 
      } catch(error) {
        console.log(chalk.red(`\n\n  Update check failed: ${error.message}\n`));
      }
}
 