/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { runSequential, getStorybookConfigPath } from '../../utils'

export interface StartStorybookCommandOptions {
	verbose: boolean
}

export async function execute({
	verbose,
}: StartStorybookCommandOptions): Promise<number> {
	const configPath = await getStorybookConfigPath()

	const args: string[] = ['-c', configPath]
	if (!verbose) {
		args.push('--quiet')
	}

	return runSequential([
		{
			exec: 'start-storybook',
			args,
		},
	])
}
